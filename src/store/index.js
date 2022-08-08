import {tokenMiddleware, tokenReducer} from './tokenReducer';
import {authReducer} from './auth/authReducer';
import {postReducer} from './post/postReducer';
import commentsReducer from './comments/commentsSlice';
import {commentReducer} from './commentReducer';
import {configureStore} from '@reduxjs/toolkit';

export const store = configureStore({
	reducer: {
		token: tokenReducer,
		comment: commentReducer,
		auth: authReducer,
		posts: postReducer,
		comments: commentsReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware()
		.concat(tokenMiddleware),
});
