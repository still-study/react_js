import {nanoid} from 'nanoid';
import {ListItem} from '@mui/material/';

export const Chats = () => {
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
    return chats.map((chat) =><ListItem key={chat.id}>{chat.name}</ListItem>)
}