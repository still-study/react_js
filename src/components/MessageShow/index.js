import {nanoid} from 'nanoid';

export const MessageShow = (props) => {
    return props.messagesList.map((message) => <div className="row"
    key={nanoid()}><span>Автор:</span> {message.author}<span><br></br>
        Текст:</span> {message.text}</div>)
}