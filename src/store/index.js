import { createStore, combineReducers } from 'redux';

import {profileReducer} from "./todo";
import { chatsReducer } from "./chats/reducer";
import { messagesReducer } from "./messages/reducer";


export const store = createStore(
    combineReducers({
        chats: chatsReducer,
        profile: profileReducer,
        messages: messagesReducer
    }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
