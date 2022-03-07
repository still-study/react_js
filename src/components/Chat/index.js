import {Message} from '../Message';
import {MessageShow} from '../MessageShow';
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {getChatsList} from "../../store/chats/selectors";
// import {useEffect} from 'react';
// import {useState} from 'react/cjs/react.development';


export const Chat = () => {
    const chats = useSelector(getChatsList);
    const {chatId} = useParams();
    const name = chats.filter((el)=>el.id === chatId)[0].name;


    // const [messagesList, setMessagesList] = useState([]);
    //
    // useEffect(() => {
    //     const lastValueArray = messagesList[messagesList.length - 1];
    //     if (lastValueArray && lastValueArray.author !== 'ROBOT') {
    //         setTimeout(() => {
    //             setMessagesList([...messagesList, {
    //                 text: '***** ЭТО СООБЩЕНИЕ СОЗДАНО АВТОМАТИЧЕСКИ!!! *****',
    //                 author: 'ROBOT'
    //             }]);
    //         }, 1000)
    //     }
    // }, [messagesList])
    //
    // const sendMessageProps = (message) => {
    //     setMessagesList([...messagesList, message]);
    // }
    return <div>
        <h2 className="chat_header">Chat: {name}</h2>

        <MessageShow chatId={chatId} />
        <Message chatId={chatId} />
    </div>
}