import {createSlice} from '@reduxjs/toolkit';
import {postsRequestAsync} from './postsAction';

const initialState = {
	posts: [],
	loading: false,
	error: '',
	after: '',
	isLast: false,
	page: '',
};

export const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		changePage: (state, action) => {
			state.page = action.payload;
			state.isLast = false;
			state.after = '';
			state.posts = [];
		},
	},
	extraReducers: {
		[postsRequestAsync.pending.type]: (state) => {
			state.loading = true;
			state.error = '';
		},
		[postsRequestAsync.fulfilled.type]: (state, action) => {
			state.posts = [...state.posts, ...action.payload.children];
			state.loading = false;
			state.error = '';
			state.after = action.payload.after;
			state.isLast = !action.payload.after;
		},
		[postsRequestAsync.rejected.type]: (state, action) => {
			state.status = 'error';
			state.error = action.error;
		},
	},
});
export default postsSlice.reducer;
