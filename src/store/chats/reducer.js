import {ADD_CHAT, REMOVE_CHAT} from "./actions";
import {nanoid} from "nanoid";

const initialState = {
    chatList:[]
}

export const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHAT:
            return {
                ...state,
                chatList: [
                    ...state.chatList,
                    {
                        id: nanoid(),
                        name: action.name
                    }
                ]
            };
        case REMOVE_CHAT:
            return {
                ...state,
                chatList: state.chatList.filter((item) => item.id !== action.id)
            }
        default:
            return state;
    }
};
