import style from './Header.module.css';
import PropTypes from 'prop-types';
import Layout from '../Layout';
import Logo from './Logo';
import Title from './Title';
import Search from './Search';
import Auth from './Auth';

export const Header = ({token, delToken}) =>
(
	<header className={style.header}>
		<Layout>
			<div className={style.gridContainer}>
				<Logo />
				<Title text='Blogget' />
				<Search />
				<Auth token={token} delToken={delToken} />
			</div>
		</Layout>
	</header>
);

Header.propTypes = {
	token: PropTypes.string,
	delToken: PropTypes.func,
};
