import PropTypes from 'prop-types';
import style from './Post.module.css';
import Image from './Image';
import Content from './Content';
import Rating from './Rating';
import DateTime from './DateTime';
import Delete from './Delete';
import formatDate from '../../../../utils/formatDate';
import nophoto from './img/notphoto.jpg';

export const Post = ({postData}) => {
	const {
		title,
		author,
		ups,
		created,
		selftext: markdown,
		thumbnail,
		thumbnail_height: thumbnailHeight,
		thumbnail_width: thumbnailWidth,
		id,
	} = postData;
	return (
		<li className={style.post}>
			<Image
				alt={title}
				src={(thumbnailHeight && thumbnailWidth) ? thumbnail : nophoto} />
			<Content
				title={title}
				author={author}
				markdown={markdown}
				id={id} />
			<Rating ups={ups} />
			<DateTime date={formatDate(created)} />
			<Delete />
		</li>
	);
};

Post.propTypes = {
	postData: PropTypes.object,
};
