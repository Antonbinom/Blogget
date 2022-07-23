import classNames from 'classnames';
import style from './Text.module.css';
import PropTypes from 'prop-types';

export const Text = prop => {
	const {
		As = 'span',
		color = 'black',
		size,
		tsize,
		dsize,
		medium,
		bold,
		className,
		children,
		href,
		center,
	} = prop;

	const classes = classNames(
		className,
		style[color],
		{[style.center]: center},
		{[style[`fs${size}`]]: size},
		{[style[`fst${tsize}`]]: tsize},
		{[style[`fsd${dsize}`]]: dsize},
		{[style.bold]: bold},
		{[style.medium]: medium},
	);
	return <As className={classes} href={href}>{children}</As>;
};

Text.protoTypes = {
	As: PropTypes.string,
	color: PropTypes.string,
	size: PropTypes.number,
	tsize: PropTypes.number,
	dsize: PropTypes.number,
	className: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object,
		PropTypes.array,
	]),
	href: PropTypes.string,
	center: PropTypes.bool,
	bold: PropTypes.bool,
	medium: PropTypes.bool,
};
