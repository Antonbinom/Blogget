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

const LIST = [
	{value: 'Главная', Icon: HomeIcon},
	{value: 'Топ', Icon: TopIcon},
	{value: 'Лучшие', Icon: BestIcon},
	{value: 'Горячие', Icon: HotIcon},
].map(assignID);

export const Tabs = () => {
	const [isDropDownOpen, setIsDropDownOpen] = useState(false);
	const [isDropDown, setIsDropDown] = useState(true);
	const [menuItem, setMenuItem] = useState('Главная');

	const handleResize = () => {
		if (document.documentElement.clientWidth < 768) {
			setIsDropDown(true);
		} else setIsDropDown(false);
	};

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
				(isDropDown && <div className={style.wrapperBtn}>
					<button className={style.btn} onClick={() => setIsDropDownOpen(!isDropDownOpen)}>
						{menuItem}
						<ArrowIcon />
					</button>
				</div>)
			}
			{(isDropDownOpen || !isDropDown) &&
				<ul className={style.list} onClick={() => setIsDropDownOpen(false)}>
					{LIST.map(({value, id, Icon}) => (
						<Text As='li' className={style.item} key={id}>
							<button bold className={style.btn} onClick={() => setMenuItem(value)}>{value} {Icon && <Icon width={25} height={25} />}</button>
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
