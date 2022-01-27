import {ChatsList} from '../../components/ChatsList';
import {Chat} from '../../components/Chat';
import {Route, Switch} from 'react-router-dom';


export const Chats = () => {
    return <>
        <div className='chatList'>
            <ChatsList />
        </div>
        
        <Switch>
            <Route path={'/chats/:chatId'} component={Chat} />
        </Switch> 
    </>

}