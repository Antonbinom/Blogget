// импортируем все что понадобится
import {useState, useEffect} from 'react';

export const useToken = (state) => {
	// состояние
	const [token, setToken] = useState(state);

	// удяляем токен из LocalStorage
	const delToken = () => {
		localStorage.removeItem('bearer');
		history.pushState(null, null, '/');
	};

	useEffect(() => {
		// условие - если в адресной строке имеется /auth, то вытаскиваем токен
		if (location.pathname.includes('/auth')) {
			// что бы получить token, вытащим через new URLSearchParams
			const token = new URLSearchParams(location.hash.substring(1))
				.get('access_token'); // получаем токен
			setToken(token); // передаем в setToken
		}
		if (localStorage.getItem('bearer')) {
			setToken(localStorage.getItem('bearer', token));
		}
	}, []);

	useEffect(() => {
		if (token) {
			localStorage.setItem('bearer', token);
		}
	}, [token]);

	return [token, delToken]; // возвращяем токен и функцию удаления токена из LocalStorage
};
