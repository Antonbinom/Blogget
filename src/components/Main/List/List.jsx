import style from './List.module.css';
import Post from './Post';
import {Loader} from '../../../UI/Loader/Loader';
import {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {postRequestAsync} from '../../../store/post/postAction';

export const List = () => {
	const postData = useSelector(state => state.post.posts);
	const endList = useRef(null);
	const dispatch = useDispatch();

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting) {
				dispatch(postRequestAsync());
			}
		}, {
			rootMargin: '100px',
		});
		observer.observe(endList.current);
	}, [endList.current]);
	return (
		<ul className={style.list}>
			{postData.constructor === Array ? postData.map((post) => (
				<Post key={post.data.id} postData={post.data} />
			)) :
				<div className={style.loader}>
					<Loader />
				</div>
			}
			<li ref={endList} className={style.end}></li>
		</ul>
	);
};
