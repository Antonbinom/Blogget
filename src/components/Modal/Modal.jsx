import style from './Modal.module.css';
import PropTypes from 'prop-types';
import {useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';
import {ReactComponent as CloseIcon} from './img/close.svg';
import Markdown from 'markdown-to-jsx';
import {useCommentData} from '../../hooks/useCommentData';
import {Comments} from './Comments/Comments';
import {FormComment} from './FormComments/FormComments';

export const Modal = ({closeModal, id}) => {
	const overlayRef = useRef(null);
	const [commentsData] = useCommentData(id);

	const handleClick = e => {
		const target = e.target;
		if (target === overlayRef.current) {
			closeModal();
		}
	};

	const handlePress = (e) => {
		if (e.keyCode === 27) {
			closeModal();
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
			{commentsData.length > 0 ?
				<div className={style.modal}>
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
					<button className={style.close} onClick={closeModal}>
						<CloseIcon className={style.svg} />
					</button>
				</div> :
				<div className={style.modal}>
					<h2 className={style.load} >Загрузка... </h2>
				</div>}
		</div>,
		document.getElementById('modal-root')
	);
};

Modal.propTypes = {
	id: PropTypes.string,
	closeModal: PropTypes.func,
};
