import style from './Modal.module.css';
import PropTypes from 'prop-types';
import {useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';
import {ReactComponent as CloseIcon} from './img/close.svg';
import Markdown from 'markdown-to-jsx';
import {useCommentData} from '../../hooks/useCommentData';
import {Comments} from './Comments/Comments';
import {FormComment} from './FormComments/FormComments';
import {Loader} from '../../UI/Loader/Loader';
import {useNavigate, useParams} from 'react-router-dom';

export const Modal = () => {
	const {id, page} = useParams();
	const overlayRef = useRef(null);
	const [commentsData, status] = useCommentData(id);
	const navigate = useNavigate();
	const handleClick = e => {
		const target = e.target;
		if (target === overlayRef.current) {
			navigate(`/category/${page}`);
		}
	};

	const handlePress = (e) => {
		if (e.keyCode === 27) {
			navigate(`/category/${page}`);
		}
	};

	useEffect(() => {
		document.addEventListener('click', handleClick);
		document.addEventListener('keydown', handlePress);
		return () => {
			document.removeEventListener('click', handleClick);
			document.removeEventListener('keydown', handlePress);
		};
	}, []);

	return ReactDOM.createPortal(
		<div className={style.overlay}
			ref={overlayRef}>
			<div className={style.modal}>
				{status === 'loading' &&
					<div className={style.loader}>
						<Loader />
						<h2 className={style.loaderTitle} >Загрузка... </h2>
					</div>}
				{status === 'error' && 'ошибка'}
				{status === 'loaded' && (
					<>
						<h2 className={style.title}>{commentsData[0].title}</h2>
						<div className={style.content}>
							<Markdown options={{
								overrides: {
									a: {
										props: {
											target: '_blank'
										}
									}
								}
							}}>
								{commentsData[0].selftext}
							</Markdown>
							<FormComment />
							<Comments comments={commentsData[1]} />
						</div>
						<p className={style.author}>
							<span>Author: </span>
							{commentsData[0].author}
						</p>
						<button className={style.close} onClick={() => {
							navigate(`/category/${page}`);
						}}>
							<CloseIcon className={style.svg} />
						</button>
					</>
				)}
			</div>
		</div>,
		document.getElementById('modal-root')
	);
};
Modal.propTypes = {
	id: PropTypes.string,
	closeModal: PropTypes.func,
};
