import { useCallback, useEffect, useState, useRef } from "react";
import {TextField, Button} from "@mui/material";
import {useDispatch} from "react-redux";
import {addMessage} from "../../store/messages/actions";

export function Message({chatId}) {

    const dispatch = useDispatch();

    const inputRef = useRef(null);
    const [message, setMessage] = useState('');

    const resetForm = useCallback(() => {
        setMessage('')
    }, [])

    const sendMessage = (event) => {
        event.preventDefault();
        dispatch(addMessage(chatId, message));
        resetForm();        
    }

    useEffect(() => {
        inputRef.current.focus();
    })

    const onChangeText = useCallback((event) => {
        setMessage(event.target.value);
    }, [])

    return (
        <div>
            <form onSubmit={sendMessage} onReset={resetForm} className="form">                
                <TextField
                    inputRef={inputRef}
                    // autoFocus
                    size="small"
                    value={message}
                    onChange={onChangeText}
                    label="Текст сообщения"/>
                <Button type="submit" variant="contained">SEND</Button>
            </form>
        </div>
    )
    
}

