import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'
class Appxx extends Component {
  state = {
    persons : [
      { name : "Ram", age : 28 },
      { name : "Shyam", age : 25 },
      { name : "Goddie", age : 36 }
    ]
  }
  switchNameHandler = () => {
    //this.state.persons[0].name = "Some";
    //console.log('was clicked');
    this.setState({
      persons : [
        { name : "Rams", age : 38 },
        { name : "Shyam", age : 25 },
        { name : "Goddie", age : 36 }
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hello Changing page!</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person/>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> My Age</Person>
      </div>
    );
  }
}

//export default App;
