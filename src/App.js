import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import './App.css';
import { Message } from './components/Message';
import { MessageShow } from './components/MessageShow';
import { Chats } from './components/Chats';


export function App() {

  const [messagesList, setMessagesList] = useState([]);
  
  useEffect(() => {
    const lastValueArray = messagesList[messagesList.length - 1];
    if (lastValueArray && lastValueArray.author !== 'ROBOT') {
      setTimeout(() => {      
      setMessagesList([...messagesList, {text: '***** ЭТО СООБЩЕНИЕ СОЗДАНО АВТОМАТИЧЕСКИ!!! *****', author: 'ROBOT'}]);
    }, 1000)
    }
  }, [messagesList])

  const sendMessageProps = (message) => {
    console.log(message);
    setMessagesList([...messagesList, message]);
  }

  return(
  <div className={['App', 'App-Header'].join(' ')}>
    <div className='chatList'>
      <Chats></Chats>
    </div>
    <div>
      <MessageShow messagesList={messagesList}/>
      <Message sendMessage={sendMessageProps}/>
    </div>
  </div>
  )

  
}