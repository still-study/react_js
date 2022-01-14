import './App.css';
import {Message} from './components/Message';

const myText = 'Props TEXT';

export function App(props) {
  return (
    <div className='App'>
      <header className='App-header'>
        My first react App
        <h3>Hello, {props.name}!</h3>
        <Message text = {myText}/>
      </header>
    </div>
  );
}