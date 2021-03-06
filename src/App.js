import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: 1, name: 'Zaher', age: 30},
      {id: 2, name: 'Gabi', age: 40},
      {id: 3, name: 'Ali', age: 30}
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

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const humanBeing = {
      ...this.state.persons[personIndex]
    };

    humanBeing.name = event.target.value;

    const people = [...this.state.persons];
    people[personIndex] = humanBeing;

    this.setState({persons: people});

    /* //console.log(event);
    this.setState({
      persons: [
        {name: 'Ali', age: 30},
        {name: event.target.value, age: 40},
        {name: 'Zaher', age: 30}
      ]
    }); */
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

    deletePersonHandler = (personIndex) =>{
      const humans = this.state.persons;
      humans.splice(personIndex,1);
      this.setState({persons:humans});
    }

  render() {

    let persons = null;

    if (this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person,index) => {
            return <Person 
              name={person.name}
              age={person.age} 
              click={()=>this.deletePersonHandler(index)}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}
            />
          })}
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
