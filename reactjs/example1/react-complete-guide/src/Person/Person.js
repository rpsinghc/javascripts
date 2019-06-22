import React from 'react'
const person = (props) => {
    return (
        <div>
        <p>I am {props.name}! calculation : {props.age} years</p>
        <p>{props.children}</p>
        </div>
    );
}

export default person;