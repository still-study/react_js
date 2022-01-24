import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import './App.css';
import { Message } from './components/Message';
import { MessageShow } from './components/MessageShow';



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

  return(
  <div className={['App', 'App-Header'].join(' ')}>
    <Message sendMessage={(message) => {
      console.log(message);
      setMessagesList([...messagesList, message])
      }}/>
    <MessageShow messagesList={messagesList}/>
  </div>
  )

  
}