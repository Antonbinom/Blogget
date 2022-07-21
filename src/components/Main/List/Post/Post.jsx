import PropTypes from 'prop-types';
import style from './Post.module.css';
import Image from './Image';
import Content from './Content';
import Rating from './Rating';
import DateTime from './DateTime';
import Delete from './Delete';

export const Post = ({postData}) => {
	const {title, author, ups, date} = postData;
	return (
		<li className={style.post}>
			<Image alt={title} />
			<Content title={title} author={author} />
			<Rating ups={ups} />
			<DateTime date={date} />
			<Delete />
		</li>
	);
};
Post.propTypes = {
	postData: PropTypes.object,
};
