import {applyMiddleware, combineReducers, createStore} from 'redux';
import {composeWithDevTools} from '@redux-devtools/extension';
import {commentReducer} from './commentReducer';
import {tokenMiddleware, tokenReducer} from './tokenReducer';
import thunk from 'redux-thunk';
import {authReducer} from './auth/authReducer';
import {postReducer} from './post/postReducer';
import {commentsReducer} from './comments/commentsReducer';

export const rootReducer = combineReducers({
	token: tokenReducer,
	comment: commentReducer,
	auth: authReducer,
	post: postReducer,
	comments: commentsReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(tokenMiddleware, thunk)));
console.log('store: ', store);
