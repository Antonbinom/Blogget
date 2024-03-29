import style from './Tabs.module.css';
import PropTypes from 'prop-types';
import {useEffect, useState} from 'react';
import {assignID} from '../../../utils/generatorID';
import {ReactComponent as ArrowIcon} from './img/arrow.svg';
import {ReactComponent as HomeIcon} from './img/home.svg';
import {ReactComponent as TopIcon} from './img/top.svg';
import {ReactComponent as BestIcon} from './img/best.svg';
import {ReactComponent as HotIcon} from './img/hot.svg';
import {debounceRaf} from '../../../utils/debounce';
import {Text} from '../../../UI/Text';
import {useNavigate} from 'react-router-dom';

const LIST = [
	{value: 'Главная', Icon: HomeIcon, link: 'rising'},
	{value: 'Топ', Icon: TopIcon, link: 'top'},
	{value: 'Лучшие', Icon: BestIcon, link: 'best'},
	{value: 'Горячие', Icon: HotIcon, link: 'hot'},
].map(assignID);

export const Tabs = () => {
	const [isDropDownOpen, setIsDropDownOpen] = useState(false);
	const [isDropDown, setIsDropDown] = useState(true);
	const [menuItem, setMenuItem] = useState('Главная');
	const navigate = useNavigate();
	// при ресайзе, если ширина меньше 768 меняем стейт
	const handleResize = () => {
		if (document.documentElement.clientWidth < 768) {
			setIsDropDown(true);
		} else setIsDropDown(false);
	};

	// сокращаем количество всплытий оброботчика событий при ресайзе
	useEffect(() => {
		const debounceResize = debounceRaf(handleResize);
		debounceResize();
		handleResize();
		window.addEventListener('resize', debounceResize);
		return () => {
			window.removeEventListener('resize', debounceResize);
		};
	}, []);

	return (
		<div className={style.container}>
			{
				// если в стейте хранится true, отрисовываем select menu
				// при клике на кнопку select menu меняем стейт на противоположный
				(isDropDown && <div className={style.wrapperBtn}>
					<button className={style.btn} onClick={() => setIsDropDownOpen(!isDropDownOpen)}>
						{menuItem}
						<ArrowIcon />
					</button>
				</div>)
			}
			{(isDropDownOpen || !isDropDown) &&
				<ul className={style.list} onClick={() => setIsDropDownOpen(false)}>
					{LIST.map(({value, id, link, Icon}) => (
						<Text
							As='li' className={style.item} key={id}>
							<button className={style.btn}
								onClick={() => {
									setMenuItem(value);
									navigate(`/category/${link}`);
								}
								}
							>
								{value}
								{Icon && <Icon width={25} height={25} />}
							</button>
						</Text>
					))}
				</ul>
			}
		</div>
	);
};


Tabs.propTypes = {
	list: PropTypes.array,
	setList: PropTypes.func,
	addItem: PropTypes.func,
};
