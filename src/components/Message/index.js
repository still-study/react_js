import '../../../src/testCss.css'

export function Message(props) {
    return (
        <div>
            <p className='testClass'>It`s Messages Component</p>
            <p className="text">{props.text}</p>
        </div>
    );
}

