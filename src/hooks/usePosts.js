import {useContext, useEffect, useState} from 'react';
import {URL_API} from '../api/const';
import {tokenContext} from '../context/tokenContext';

export const usePosts = () => {
	const [posts, setPosts] = useState([]);
	const {token} = useContext(tokenContext);

	useEffect(() => {
		if (!token) return;
		fetch(`${URL_API}/best`, {
			headers: {
				Authorization: `bearer ${token}`,
			},
		})
			.then((response) => response.json())
			.then((data) => setPosts(data.data.children));
	}, [token]);
	return [posts];
};
