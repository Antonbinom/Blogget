import {put, select, takeLatest} from 'redux-saga/effects';
import axios from 'axios';
import {URL_API} from '../../api/const';
import {searchRequestError, searchRequestSuccess, SEARCH_REQUEST} from './searchAction';

function* fetchSearch(search) {
	const token = yield select(state => state.token.token);
	try {
		const request = yield axios(`${URL_API}/search?q=${search}`, {
			headers: {
				Authorization: `bearer ${token}`,
			},
		});
		yield put(searchRequestSuccess(request.data.data));
	} catch (e) {
		yield put(searchRequestError(e));
	}
}

export function* watchSearch() {
	yield takeLatest(SEARCH_REQUEST, fetchSearch);
}
