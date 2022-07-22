import style from './DateTime.module.css';
import PropTypes from 'prop-types';
export const DateTime = ({date}) =>
(
	<time className={style.date} dateTime={date}>{date}</time>
);

DateTime.propTypes = {
	date: PropTypes.string,
};
