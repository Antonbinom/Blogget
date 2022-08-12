// import {put, select, takeEvery} from 'redux-saga/effects';
// import axios from 'axios';
// import {URL_API} from '../../api/const';
// import {postsSlice} from './postsSlice';

// function* fetchPosts(newPage) {
// 	const page = yield newPage.payload || select(state => state.posts.page);
// 	const token = yield select(state => state.token.token);
// 	const after = yield select(state => state.posts.after);
// 	const isLast = yield select(state => state.posts.isLast);

// 	if (!token || isLast) return;

// 	try {
// 		const request = yield axios(`${URL_API}/${page}?limit=10&${after ?
// 			`after=${after}` : ''}`, {
// 			headers: {
// 				'Authorization': `bearer ${token}`,
// 			},
// 		});

// 		yield put(postsSlice.actions.postsRequestSuccess(request.data.data));
// 	} catch (e) {
// 		yield put(postsSlice.actions.postsRequestError(e));
// 	}
// }

// export function* watchPosts() {
// 	yield takeEvery(postsSlice.actions.postsRequest, fetchPosts);
// }
