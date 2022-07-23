import style from './Title.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../UI/Text';

export const Title = ({text}) =>
	(<Text className={style.heading} size={22} tsize={26} center>{text}</Text>);

Title.propTypes = {
	text: PropTypes.string,
};
