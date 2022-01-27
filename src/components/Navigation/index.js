import {ListItemButton} from '@mui/material/';
import{Link} from 'react-router-dom';
import {nanoid} from 'nanoid';

const NavMenu = [
    {
        path: '/',
        title: 'Home',
    },
    {
        path: '/profile',
        title: 'Profile',
    },
    {
        path: '/chats',
        title: 'Chats',
    }
];

export const Navigation = () => {
    return NavMenu.map(({path, title}) =><ListItemButton key={nanoid()}>
            <Link to={path} className='nav_link'>{title}</Link>
        </ListItemButton>)
}