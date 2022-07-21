import style from './Content.module.css';
import PropTypes from 'prop-types';
export const Content = props =>
(
	<div className={style.content}>
		<h2 className={style.title}>
			<a className={style.linkPost} href='#post'>
				{props.title}
			</a>
		</h2>
		<a className={style.linkAuthor} href='#author'>
			{props.author}
		</a>
	</div>
);

Content.propTypes = {
	title: PropTypes.string,
	author: PropTypes.string,
};
