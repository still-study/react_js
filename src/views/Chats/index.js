import {ChatsList} from '../../components/ChatsList';
import {Chat} from '../../components/Chat';
import {Route, Switch} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {useCallback, useEffect, useState} from "react";
import {addChatWithFirebase, initChatTracking} from "../../store/chats/actions";



export const Chats = () => {
    const dispatch = useDispatch();

    const [chat, setChat] = useState('');

    const resetForm = useCallback(() => {
        setChat('')
    }, [])

    const createChat = useCallback((event) => {
        event.preventDefault();
        dispatch(addChatWithFirebase(chat));
        resetForm();
    }, [chat, resetForm, dispatch])

    useEffect(() => {
        dispatch(initChatTracking());
    }, [dispatch]);

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