import {useSelector} from 'react-redux';
import {getMessages} from "../../store/messages/selectors";

export const MessageShow = ({chatId}) => {

    const messages = useSelector(getMessages(chatId));

    if (messages) {
        return messages.map((message) => <div className="row"
                                               key={message.id}><span>Автор:</span> {message.author}<span><br></br>
        Текст:</span> {message.text}</div>)
    } else {
        return '';
    }

}