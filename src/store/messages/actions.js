export const ADD_MESSAGE = "MESSAGES::ADD_MESSAGES";
export const REMOVE_MESSAGE = "MESSAGES::REMOVE_MESSAGES";

export const addMessage = (chatId, message, author = 'Sponge Bob') => ({
    type: ADD_MESSAGE,
    chatId,
    message,
    author
});

export const removeMessage = (chatId) => ({
    type: REMOVE_MESSAGE,
    chatId
});