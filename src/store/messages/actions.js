import {db} from "../../services/firebase";
export const REMOVE_MESSAGE = "MESSAGES::REMOVE_MESSAGES";
export const CHANGE_MESSAGES = "MESSAGES::CHANGE_MESSAGES";

const getPayloadFromSnapshot = (snapshot) => {
    const messages = [];
    snapshot.forEach((mes) => {
        messages.push(mes);
    });
    return { chatId: snapshot.key, messages }
}

export const addMessageWithFirebase = (chatId, message) => async () => {
    await db.ref("messages").child(chatId).push(message);
};

export const removeMessage = (chatId) => async () => {
    await db.ref("messages").child(chatId).remove();
};

export const initMessageTracking = () => (dispatch) => {
    db.ref("messages").on("child_changed", (snapshot) => {
        const payload = getPayloadFromSnapshot(snapshot);
        dispatch({
            type: CHANGE_MESSAGES,
            payload,
        });
    });
    db.ref("messages").on("child_added", (snapshot) => {
        const payload = getPayloadFromSnapshot(snapshot);
        dispatch({
            type: CHANGE_MESSAGES,
            payload,
        });
    });
    db.ref("messages").on("child_removed", (snapshot) => {
        dispatch({
            type: REMOVE_MESSAGE,
            // payload, //name
            chatId: snapshot.key
        });
    });
};