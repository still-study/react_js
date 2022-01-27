import { useCallback, useEffect, useState, useRef } from "react";
import {TextField, Button} from "@mui/material";


export function Message(props) {

    const inputRef = useRef(null);
    const [message, setMessage] = useState({text: '', author: 'Sponge Bob'})

    const resetForm = useCallback(() => {
        setMessage({text: '', author: 'Sponge Bob'})
    }, [])

    const sendMessage = (event) => {
        event.preventDefault();
        if (props.sendMessage) {
            props.sendMessage(message);
        }
        resetForm();        
    }

    useEffect(() => {
        inputRef.current.focus();
    })

    const onChangeText = useCallback((event) => {
        setMessage((message) => {
            return {
                ...message,
                text: event.target.value
            }
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

