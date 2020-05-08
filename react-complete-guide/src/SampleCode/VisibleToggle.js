import React, { Component } from 'react';
import './App.css';
import  Person from './Person/Person'
import person from './Person/Person';

//This is not a prefered way of outputting conditional content
//Use the Approach used in App.js to toggle the visiblity of persons JSX code.
//In return we can have only JSX code, the other method used is shorter, consise and does not over board the return statement.
//Class Based Component
class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 26},
      {name: 'Sanu', age: 28},
      {name: 'Sunny', age: 26},
    ],
    otherState: 'set another state',
    showPersons:false
  }

  switchNameHandler = (newName) => {
    //console.log("Was Clicked!");
    //DON'T DO THIS - this.state.persons[0].name = "Aayushi";
    this.setState({
      persons: [
      {name: newName, age: 23},
      {name: 'Sanu', age: 28},
      {name: 'Simran', age: 26},
    ]
  })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
      {name: 'Max', age: 28},
      {name: event.target.value, age: 28},
      {name: 'Simran', age: 26},
    ]
  })
  }

  togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
  }


  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!!</p>
        <button 
        style = {style}
        onClick={this.togglePersonsHandler}>Toggle Persons</button>
        
        {/* //can use only simple statements and not block statements, like if.
        //we can write the js code inside the {<div></div>}
        //using JS code inside JSX */}

      { this.state.showPersons === true ? 
        <div >
          <Person 
          name = {this.state.persons[0].name} 
          age ={this.state.persons[0].age}/>

          <Person 
          name = {this.state.persons[1].name} 
          age ={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this,'Max!!')}
          changed={this.nameChangedHandler} >My Hobbie: Racing</Person>

          <Person 
          name = {this.state.persons[2].name} 
          age ={this.state.persons[2].age}/>
        </div> : null
      }
      </div>
    );

    // return React.createElement('div',{className: 'App'}, React.createElement('h1',null,'Does this work?'));
  }
}

export default App;
