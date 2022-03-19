import {useCallback, useEffect, useState, useRef} from "react";
import {TextField, Button} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {addMessageWithFirebase, initMessageTracking} from "../../store/messages/actions";
import {getUser} from "../../store/user/reducer";

export function Message({chatId}) {

    const user = useSelector(getUser);
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

    const sendMessage = useCallback((event) => {
        event.preventDefault();
        dispatch(addMessageWithFirebase(chatId, {...message}));

        resetForm();
    }, [chatId, message, resetForm, dispatch])

    useEffect(() => {
        dispatch(initMessageTracking());
    }, [dispatch]);

    useEffect(() => {
        inputRef.current.focus();
    })

    const onChangeText = useCallback((event) => {
        setMessage({
            text: event.target.value,
                author: user.email
        });
    }, [user.email])

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

