import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Zaher', age: 30},
      {name: 'Gabi', age: 40},
      {name: 'Ali', age: 30}
    ],
    style: {
      backgroundColor: 'whitesmoke',
      border: '1px solid blue',
      padding: '10px',
      boxShadow: '0 3px 3px #00008B'
    },
    showPersons: false
  }

  /* switchNameHandler = (newName) => {
    //this.state.persons[0].name = 'FBW3';
    //Do not do this. This does not work!
    this.setState({
      persons: [
      {name: newName, age: 3},
      {name: newName, age: 1},
      {name: newName, age: 2}
    ],
    style:{
      backgroundColor: 'whitesmoke',
      border: '1px solid #900C3F',
      padding: '10px',
      boxShadow: '0 3px 3px #900C3F'
    }
  }
  );
  } */

  nameChangedHandler = (event) => {
    //console.log(event);
    this.setState({
      persons: [
        {name: 'Ali', age: 30},
        {name: event.target.value, age: 40},
        {name: 'Zaher', age: 30}
      ]
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      style:{
        backgroundColor: 'whitesmoke',
        border: '1px solid #900C3F',
        padding: '10px',
        boxShadow: '0 3px 3px #900C3F'},
      showPersons: !doesShow
    });
    }

  render() {

    let persons = null;

    if (this.state.showPersons){
      persons = (
        <div>
          <Person name={this.state.persons[0].name} 
                  age={this.state.persons[0].age}
                  style = {this.state.style}>
                    Hobby: Body building
          </Person>
          
          <Person name={this.state.persons[1].name} 
                  age={this.state.persons[1].age}
                  changed={this.nameChangedHandler} 
                  style = {this.state.style}      
                  >My Hobby: Swimming
          </Person>
                  
          <Person name={this.state.persons[2].name} 
                  age={this.state.persons[2].age}/>
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hello World</h1>
        <p>I am a React Developer</p>
        <p>
          <button
          style = {this.state.style}
          onClick = {this.togglePersonsHandler}>
          Toggle Persons</button>
        </p>
        {persons}

      </div>
    );
    // return React.createElement('div',  {className: 'App'}, 
    // React.createElement('h1',  null, 'Hi I am a react developer!'));
  }
}

export default App;
