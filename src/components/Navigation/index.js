import {ListItemButton} from '@mui/material/';
import{Link} from 'react-router-dom';
import {nanoid} from 'nanoid';
import {auth} from "../../services/firebase";
import {useSelector} from "react-redux";
import {getIsAuth} from "../../store/user/reducer";

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
    },
    {
        path: '/api',
        title: 'API',
    }
];

const menuList = NavMenu.map(({path, title, onClick}) =><ListItemButton key={nanoid()}>
    <Link to={path} className='nav_link' onClick={onClick}>{title}</Link>
</ListItemButton>);

export const Navigation = () => {
    const isAuth = useSelector(getIsAuth);
    return <>
        {menuList}
        <div className='authBlock'>
            {isAuth ?
                <Link to='/login' className='nav_link' onClick={() => {auth.signOut()}}>Logout</Link>
                :
                <>
                    <Link to='/login' className='nav_link'>Login</Link>
                    <Link to='/signup' className='nav_link'>SignUp</Link>
                </>
            }


        </div>
    </>

}