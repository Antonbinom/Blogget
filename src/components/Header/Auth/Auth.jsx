import style from './Auth.module.css';
import PropTypes from 'prop-types';
import {useState} from 'react';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';
import {useDispatch} from 'react-redux';
import {deleteToken} from '../../../store/tokenReducer';
import {useAuth} from '../../../hooks/useAuth';
import {Loader} from '../../../UI/Loader/Loader';

export const Auth = () => {
	const dispatch = useDispatch();
	const [auth, loading, clearAuth] = useAuth();
	const [showLogout, setShowLogout] = useState(false);


	const getOut = () => {
		setShowLogout(!showLogout);
	};

	const logOut = () => {
		dispatch(deleteToken());
		clearAuth();
	};

	return (
		<div className={style.container} >
			{loading ?
				(<Loader />) :
				auth.name ? (
					<>
						<button className={style.btn} onClick={() => {
							getOut();
						}}>
							<img
								className={style.img}
								src={auth.img}
								title={auth.name}
								alt={'Аватар'} />
						</button>
						{(showLogout && <button className={style.logout} onClick={() => {
							logOut();
						}}>Выйти</button>)}
					</>
				) : (
					<Text As='a' className={style.authLink} href={urlAuth}>
						<LoginIcon className={style.svg} />
					</Text>
				)
			}
		</div>
	);
};

Auth.propTypes = {
	token: PropTypes.string,
	delToken: PropTypes.func,
};
