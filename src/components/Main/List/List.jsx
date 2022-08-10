import style from './List.module.css';
import Post from './Post';
import {Loader} from '../../../UI/Loader/Loader';
import {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {postsRequestAsync} from '../../../store/posts/postsAction';
import {Outlet, useParams} from 'react-router-dom';
import {postsSlice} from '../../../store/posts/postsSlice';

export const List = () => {
	const posts = useSelector(state => state.posts.posts);
	const endList = useRef(null);
	const dispatch = useDispatch();
	const {page} = useParams();

	useEffect(() => {
		dispatch(postsSlice.actions.changePage(page));
	}, [page]);

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting) {
				dispatch(postsRequestAsync());
			}
		}, {
			rootMargin: '100px',
		});
		observer.observe(endList.current);

		return () => {
			if (endList.current) {
				observer.unobserve(endList.current);
			}
		};
	}, [endList.current]);
	return (
		<>
			<ul className={style.list}>
				{posts ? posts.map((post) => (
					<Post key={post.data.id} postData={post.data} />
				)) :
					<div className={style.loader}>
						<Loader />
					</div>
				}
				<li ref={endList} className={style.end}></li>
			</ul>
			<Outlet />
		</>
	);
};
