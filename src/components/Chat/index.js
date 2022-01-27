import { Message } from '../Message';
import { MessageShow } from '../MessageShow';
import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';

export const Chat = () => {
    const {chatId} = useParams();
    const [messagesList, setMessagesList] = useState([]);
  
    useEffect(() => {
        const lastValueArray = messagesList[messagesList.length - 1];
        if (lastValueArray && lastValueArray.author !== 'ROBOT') {
        setTimeout(() => {      
        setMessagesList([...messagesList, {text: '***** ЭТО СООБЩЕНИЕ СОЗДАНО АВТОМАТИЧЕСКИ!!! *****', author: 'ROBOT'}]);
        }, 1000)
        }
    }, [messagesList])

    const sendMessageProps = (message) => {
        console.log(message);
        setMessagesList([...messagesList, message]);
    }
    return <div>
        <h2 className="chat_header">Chat ID: {chatId}</h2>
        <MessageShow messagesList={messagesList}/>
        <Message sendMessage={sendMessageProps}/>
    </div>
}