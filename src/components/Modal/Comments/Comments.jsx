import DateTime from '../../Main/List/Post/DateTime';
import style from './Comments.module.css';
import PropTypes from 'prop-types';
import formatDate from '../../../utils/formatDate';
import {Text} from '../../../UI/Text';
import Markdown from 'markdown-to-jsx';

export const Comments = ({comments}) => {
	console.log('comments: ', comments);

	return (
		<ul className={style.list}>
			{comments.length > 0 ? comments.map(comment => {
				if (comment.id && comment.author && comment.body && comment.created && comment.author !== '[deleted]' && comment.body !== '[removed]') {
					return (
						<li key={comment.id} className={style.item}>
							<Text As='h3'
								className={style.author}
								size={18}
								tsize={22}
							>
								{comment.author}
							</Text>
							<Text As="div"
								className={style.comment}
								size={14}
								tsize={18}
							>
								<Markdown className={style.comment} options={{

									overrides: {
										a: {
											props: {
												target: '_blank',
											},
										},
									},
								}}>
									{comment.body}
								</Markdown>
							</Text>
							<DateTime date={formatDate(comment.created)} />
						</li>
					);
				}
			}) : <Text As='p'
				className={style.comment}
				size={14}
				tsize={18}
				bold
			>
				Нет комментариев...
			</Text>}
		</ul>
	);
};

Comments.propTypes = {
	comments: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object,
		PropTypes.array,
	])
};
