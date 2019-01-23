import  React from 'react';
import './Person.css'

const person = (props) => {
    return (
    <div className="person">
        <p onClick={props.click}>I am <span>{props.name}</span>! And I am 
        <span>{props.age}</span> years old!</p>
            

        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}/>
    </div>
    );
}

export default person;