import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'


const app = props => {
  const [ personsState, setPersonsState ] = useState({
    persons : [
      { name : "Ram", age : 28 },
      { name : "Shyam", age : 25 },
      { name : "Goddie", age : 36 }
    ]
  });

  const switchNameHandler = () => {
    //this.state.persons[0].name = "Some";
    //console.log('was clicked');
    setPersonsState({
      persons : [
        { name : "Rams", age : 38 },
        { name : "Shyam", age : 25 },
        { name : "Goddie", age : 36 }
      ]
    });
  };

  return (
    <div className="App">
      <h1>Hello Changing page!</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person/>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}> My Age</Person>
    </div>
  );
};

export default app;


