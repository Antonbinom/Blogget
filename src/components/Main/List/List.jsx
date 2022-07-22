import style from './List.module.css';
import Post from './Post';

export const List = () => {
	const postData = {
		thumbnail: '',
		title: 'Title',
		author: 'Nickname',
		ups: 24,
		date: '2022-07-27T17:05:00.000Z',
	};
	return (
		<ul className={style.list}>
			<Post postData={postData} />
		</ul>
	);
};
