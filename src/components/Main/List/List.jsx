import style from './List.module.css';
import Post from './Post';

export const List = () => {
	const postsData = [
		{
			thumbnail: '',
			title: 'Title1',
			author: 'Nickname1',
			ups: 24,
			date: '2022-07-22T16:05:00.000Z',
			id: '10',
		},
		{
			thumbnail: '',
			title: 'Title2',
			author: 'Nickname2',
			ups: 17,
			date: '2022-07-23T10:15:00.000Z',
			id: '32',
		},
		{
			thumbnail: '',
			title: 'Title3',
			author: 'Nickname3',
			ups: 89,
			date: '2022-07-24T17:35:00.000Z',
			id: '45',
		},
		{
			thumbnail: '',
			title: 'Title4',
			author: 'Nickname4',
			ups: 45,
			date: '2022-07-27T19:05:00.000Z',
			id: '22',
		},
	];
	return (
		<ul className={style.list}>
			{postsData.map(postData => (
				<Post key={postData.id} postData={postData} />
			)
			)}
		</ul>
	);
};
