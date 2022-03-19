import {REMOVE_MESSAGE, CHANGE_MESSAGES} from "./actions";

const initialState = {
  messageList: {}
};

export const messagesReducer = (state = initialState, action) => {
  switch (action?.type) {
      case CHANGE_MESSAGES: {
          return {
              ...state,
              messageList: {
                  ...state.messageList,
                  [action.payload.chatId]: action.payload.messages,
              },
          };
      }

      case REMOVE_MESSAGE:
          const currentList = {...state.messageList};
          delete currentList[action.chatId];

          return {
              messageList: currentList
          }

      default:
          return state;
  }
};