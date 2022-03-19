import {Message} from '../Message';
import {MessageShow} from '../MessageShow';
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {getChatsList} from "../../store/chats/selectors";
import { Redirect } from "react-router-dom";



export const Chat = () => {

    const chats = useSelector(getChatsList);
    const {chatId} = useParams();
    const chatsArray = chats.filter((el) => el.id === chatId);

    let name = chatsArray[0].name;


    return <div>
        <h2 className="chat_header">Chat: {name}</h2>

        <MessageShow chatId={chatId}/>
        {chatsArray.length ?
            <Message chatId={chatId}/>
        :
            <Redirect to={{ pathname: "/chats" }} />
        }




    </div>
}