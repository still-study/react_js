import {db} from "../../services/firebase";
export const REMOVE_CHAT = "CHATS::REMOVE_CHAT";
export const CHANGE_CHATS = "CHATS::CHANGE_CHATS";

export const addChatWithFirebase = (chat) => async () => {
    await db.ref("chats").push({name: chat});
};

export const removeChat = (id) => async () => {
    await db.ref("chats").child(id).remove();
};

export const initChatTracking = () => (dispatch) => {
    db.ref("chats").on("child_changed", (snapshot) => {
        dispatch({
            type: CHANGE_CHATS,
            id: snapshot.key,
            name: snapshot.val().name
        });
    });
    db.ref("chats").on("child_added", (snapshot) => {
        dispatch({
            type: CHANGE_CHATS,
            id: snapshot.key,
            name: snapshot.val().name
        });
    });
    db.ref("chats").on("child_removed", (snapshot) => {
        dispatch({
            type: REMOVE_CHAT,
            id: snapshot.key
        });
    });
};

