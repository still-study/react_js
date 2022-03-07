export const ADD_MESSAGE = "MESSAGES::ADD_MESSAGES";
export const REMOVE_MESSAGE = "MESSAGES::REMOVE_MESSAGES";

export const addMessage = (chatId, message) => ({
    type: ADD_MESSAGE,
    chatId,
    message
});
export const addMessageWhitMiddleware = (chatId, message) => (dispatch, getState) => {
    dispatch(addMessage(chatId, message));
    if (message.author !== 'ROBOT') {
        const botMessage = {
            text: '***** ЭТО СООБЩЕНИЕ СОЗДАНО АВТОМАТИЧЕСКИ!!! *****',
            author: 'ROBOT'
        }
        setTimeout(() => {
            dispatch(addMessage(chatId, botMessage))
        }, 1000)
    }
}

export const removeMessage = (chatId) => ({
    type: REMOVE_MESSAGE,
    chatId
});