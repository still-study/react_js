// 1. Установить redux, react-redux.
// 2. Создать редьюсер профиля.Подключить страницу профиля к redux.
// 3. Добавить на странице профиля чекбокс и сохранение его состояния в сторе.
// 4. Установить и настроить redux devtools.

import { createStore } from 'redux';
import {profileReducer} from "./todo";


export const store = createStore(
    profileReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
