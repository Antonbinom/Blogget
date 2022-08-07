import style from './List.module.css';
import Post from './Post';
import {usePosts} from '../../../hooks/usePosts';
import {Loader} from '../../../UI/Loader/Loader';

export const List = () => {
	const [posts] = usePosts();

	return (
		<ul className={style.list}>
			{posts.constructor === Array ? posts.map((post) => (
				<Post key={post.data.id} postData={post.data} />
			)) :
				<div className={style.loader}>
					<Loader />
				</div>
			}
		</ul>
	);
};
