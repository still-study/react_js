import {ListItem} from '@mui/material/';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {getChatsList} from "../../store/chats/selectors";
import {useCallback} from "react";
import {removeChat} from "../../store/chats/actions";
import {removeMessage} from "../../store/messages/actions";
import {useHistory} from "react-router-dom/cjs/react-router-dom";

export const ChatsList = () => {
    const chats = useSelector(getChatsList);
    const dispatch = useDispatch();
    const { push } = useHistory();

    const deleteChat = useCallback((id) => {
        dispatch(removeChat(id));
        dispatch(removeMessage(id));
        push("/chats");
    }, [dispatch, push])

    return (
        chats.map((chat) => <ListItem key={chat.id}>
            <div className="chatListItem">
                <Link to={'/chats/' + chat.id}>{chat.name}</Link>
                <button onClick={() => deleteChat(chat.id)}>&times;</button>
            </div>
        </ListItem>)
    )
}