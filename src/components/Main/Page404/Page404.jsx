import style from './Page404.module.css';
import {Text} from '../../../UI/Text';

export const Page404 = () => (
	<div className={style.wrapper}>
		<Text
			As='h2'
			color='orange'
			bold
			size={28}
			tsize={32}
			bottom={20}
			center
		>
			Ошибка 404!
		</Text>
		<Text
			size={22}
			tsize={22}
			top={10}
			bottom={20}
			center
		>
			Такой страницы не существует!
		</Text>
		<Text
			size={22}
			tsize={22}
			top={10}
			center
		>
			Возможно ошибка в адресной строке...
		</Text>
	</div>
);
