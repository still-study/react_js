import {ADD_MESSAGE, REMOVE_MESSAGE} from "./actions";
import {nanoid} from "nanoid";

const initialState = {
  messageList: {}
};

export const messagesReducer = (state = initialState, action) => {
  switch (action?.type) {
      case ADD_MESSAGE: {
          const currentList = state.messageList[action.chatId] || [];
          return {
              ...state,
              messageList: {
                  ...state.messageList,
                  [action.chatId]: [
                      ...currentList,
                      {
                          text: action.message.text,
                          id: nanoid(),
                          author: action.message.author
                      },
                  ],
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