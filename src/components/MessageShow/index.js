import {useSelector} from 'react-redux';
import {getMessages} from "../../store/messages/selectors";
// import {Redirect} from "react-router-dom";

export const MessageShow = ({chatId}) => {

    const messages = useSelector(getMessages(chatId));

    if (messages) {
        return messages.map((message) => <div className="row"
                                               key={message.key}><span>Автор:</span> {message.val().author}<span><br></br>
        Текст:</span> {message.val().text}</div>)
    } else {
        return ''
        // return <Redirect to={{ pathname: "/profile" }} />
    }





}