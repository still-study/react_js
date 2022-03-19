import {CHANGE_CHATS, REMOVE_CHAT} from "./actions";

const initialState = {
    chatList:[]
}

export const chatsReducer = (state = initialState, action) => {
    switch (action.type) {

        case CHANGE_CHATS:
            return {
                ...state,
                chatList: [
                    ...state.chatList,
                    {
                        id: action.id,
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
