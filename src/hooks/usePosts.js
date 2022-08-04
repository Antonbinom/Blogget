import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {URL_API} from '../api/const';

export const usePosts = () => {
	const [posts, setPosts] = useState([]);
	const token = useSelector(state => state.token);

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
