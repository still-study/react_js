import {ListItem} from '@mui/material/';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {getChatsList} from "../../store/chats/selectors";
import {removeChat} from "../../store/chats/actions";
import {removeMessage} from "../../store/messages/actions";


export const ChatsList = () => {
    const chats = useSelector(getChatsList);
    const dispatch = useDispatch();

    const deleteChat = (id) => {
        dispatch(removeChat(id));
        dispatch(removeMessage(id));
    }

    return (
        chats.map((chat) => <ListItem key={chat.id}>
            <div className="chatListItem">
                <Link to={'/chats/' + chat.id}>{chat.name}</Link>
                <button onClick={() => deleteChat(chat.id)}>&times;</button>
            </div>
        </ListItem>)
    )
}