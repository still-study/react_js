import {ChatsList} from '../../components/ChatsList';
import {Chat} from '../../components/Chat';
import {Route, Switch} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {useCallback, useState} from "react";
import {addChat} from "../../store/chats/actions";


export const Chats = () => {
    const dispatch = useDispatch();

    const [chat, setChat] = useState('');

    const resetForm = useCallback(() => {
        setChat('')
    }, [])

    const createChat = (event) => {
        event.preventDefault();
        dispatch(addChat(chat));
        resetForm();
    }

    const onChangeText = useCallback((event) => {
        setChat(event.target.value);
    }, [])

    return <>
        <div className='chatList'>
            <ChatsList />
            <div>
                <form onSubmit={createChat} onReset={resetForm} className="form">
                    <input
                        value={chat}
                        onChange={onChangeText}
                        placeholder="Название чата"/>
                    <button type="submit">Создать</button>
                </form>
            </div>
        </div>
        
        <Switch>
            <Route path={'/chats/:chatId'}>
                <Chat/>
            </Route>
            {/*<Route path={'/chats/:chatId'} component={Chat} />*/}
        </Switch>
    </>

}