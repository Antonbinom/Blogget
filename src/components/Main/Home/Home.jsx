import style from './Home.module.css';
import {Text} from '../../../UI/Text';
export const Home = () => (
	<div className={style.wrapper}>
		<Text
			As='h2'
			bold
			size={28}
			tsize={32}
			bottom={20}
		>
			Стартовая страница
		</Text>
		<Text
			size={22}
			tsize={22}
			top={10}
			bottom={20}
		>
			Добро пожаловать!
		</Text>
		<Text
			size={22}
			tsize={22}
			top={10}
		>
			Выберите категорию.
		</Text>
	</div>
);
