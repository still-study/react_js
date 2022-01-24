import { useCallback, useState } from "react";

export function Message(props) {
    
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
                <input type="text" name="text" 
                    value={message.text}
                    onChange={onChangeText}
                ></input>
                <input type="submit"></input>
            </form>
        </div>
    )
    // return props.messages.map((message) => <div key={props.messages.indexOf(message)}>{message}</div>)
}

