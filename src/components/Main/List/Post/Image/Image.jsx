import style from './Image.module.css';
import PropTypes from 'prop-types';

export const Image = ({alt, src}) => (
	<img className={style.img} src={src} alt={alt} />
);

Image.propTypes = {
	alt: PropTypes.string,
	src: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.func,
	]),
};
