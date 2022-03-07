import {useCallback, useEffect, useState, useRef} from "react";
import {TextField, Button} from "@mui/material";
import {useDispatch} from "react-redux";
import {addMessageWhitMiddleware} from "../../store/messages/actions";

export function Message({chatId}) {

    const dispatch = useDispatch();

    const inputRef = useRef(null);
    const [message, setMessage] = useState({
        text: '',
        author: ''
    });

    const resetForm = useCallback(() => {
        setMessage({
            text: '',
            author: ''
        })
    }, [])

    const sendMessage = (event) => {
        event.preventDefault();
        dispatch(addMessageWhitMiddleware(chatId, message));
        resetForm();
    }

    useEffect(() => {
        inputRef.current.focus();
    })

    const onChangeText = useCallback((event) => {
        setMessage({
            text: event.target.value,
            author: 'Sponge Bob'
        });
    }, [])

    return (
        <div>
            <form onSubmit={sendMessage} onReset={resetForm} className="form">
                <TextField
                    inputRef={inputRef}
                    // autoFocus
                    size="small"
                    value={message.text}
                    onChange={onChangeText}
                    label="Текст сообщения"/>
                <Button type="submit" variant="contained">SEND</Button>
            </form>
        </div>
    )

}

