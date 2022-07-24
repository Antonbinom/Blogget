import {URL_API} from '../api/const';
import {useEffect} from 'react';

export const useAuth = (token, delToken, setAuth) => {
	useEffect(() => {
		if (!token) return;
		fetch(`${URL_API}/api/v1/me`, {
			headers: {
				Authorization: `bearer ${token}`,
			},
		}).then(response => {
			if (response.status === 401) delToken();
			return response.json();
		})
			.then(({name, icon_img: iconImg}) => {
				const img = iconImg.replace(/\?.*$/, '');
				setAuth({name, img});
			})
			.catch(err => {
				console.log(err);
				setAuth({});
			});
	}, [token]);
};
