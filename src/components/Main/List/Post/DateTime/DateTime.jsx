import style from './DateTime.module.css';
import PropTypes from 'prop-types';
import formatDate from '../../../../../utils/formatDate';

export const DateTime = props =>
(
	<time className={style.date} dateTime={props.date}>{formatDate(props.date)}</time>
);

DateTime.propTypes = {
	date: PropTypes.string,
};
