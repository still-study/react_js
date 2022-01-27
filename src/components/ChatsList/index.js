import {nanoid} from 'nanoid';
import {ListItem} from '@mui/material/';
import { Link } from 'react-router-dom';


export const ChatsList = () => {
    
    const chats = [
        {
            id: nanoid(),
            name: 'Chat 1'
        },
        {
            id: nanoid(),
            name: 'Chat 2'
        },
        {
            id: nanoid(),
            name: 'Chat 3'
        }
    ];
    
    return chats.map((chat) =><ListItem key={chat.id}>
        <Link to={'/chats/' + chat.id}>{chat.name}</Link>
    </ListItem>)
}