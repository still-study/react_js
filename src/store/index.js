import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {profileReducer} from "./todo";
import {chatsReducer} from "./chats/reducer";
import {messagesReducer} from "./messages/reducer";
import {usersReducer} from "./api/reducer";
import {userReducer} from "./user/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
        chats: chatsReducer,
        profile: profileReducer,
        messages: messagesReducer,
        users: usersReducer,
        user: userReducer
    });


export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);


