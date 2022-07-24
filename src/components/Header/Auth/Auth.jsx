import {useState} from 'react';
import style from './Auth.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';
import {useAuth} from '../../../hooks/useAuth';

export const Auth = ({token, delToken}) => {
	const [auth, setAuth] = useState({});
	const [logout, setLogout] = useState(false);

	useAuth(token, delToken, setAuth);

	return (
		<div className={style.container} >
			{
				auth.name ? (
					<button className={style.btn} onClick={() => {
						setLogout(!logout);
					}}>
						<img className={style.img} src={auth.img} title={auth.name} alt={'Аватар'} />
					</button>
				) : (
					<Text As='a' className={style.authLink} href={urlAuth}>
						<LoginIcon className={style.svg} />
					</Text>
				)
			}
			{(logout && <button className={style.logout} onClick={() => {
				delToken();
				setLogout(!logout);
				setAuth({});
				console.log(localStorage);
			}}>Выйти</button>)}
		</div>
	);
};

Auth.propTypes = {
	token: PropTypes.string,
	delToken: PropTypes.func,
};
