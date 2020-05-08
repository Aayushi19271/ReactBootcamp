import React, { Component } from 'react';
import classes from './App.css';
import  Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import withClass from '../hoc/withClass'
import Aux from '../hoc/Aux'

//Class Based Component
class App extends Component {
  //execute the constructor of the component you're extending to make sure everything gets initialized correctly.
  constructor(props){
    super(props);
    console.log('[App.js]constructor');
  }


  state = {
    persons: [
      {id:1 ,name: 'Max', age: 26},
      {id:2 ,name: 'Sanu', age: 28},
      {id:3 ,name: 'Sunny', age: 26},
    ],
    otherState: 'set another state',
    showPersons:false,
    showCockpit:true,
    changeCounter:0
  }

  static getDerivedStateFromProps(props,state){
    console.log('[App.js] getDerivedStateFromProps',props);
    return state; // return updated state
  }

  // componentWillMount(){
  //   console.log('[App.js] componentWillMount');
  // }

  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps,nextStates){
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate');
  }


  //change the state immutably
  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons -- 
      /*problem:  object and array are reference types 
      so when i get the persons from my state , actually pointing to the original object.
      So Instead use the ES6 feature - spread operator or slice.
      */
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons: persons});
  }

  //to change the name from the textbox
  nameChangedHandler = (event,id) => {
    //matches the id of the selected list person from the state
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    //doubt
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;


    this.setState((prevState,props)=>{
      return {
        persons: persons,
        changeCounter: prevState.changeCounter+1
      };
    });
  }

  //To change the Visiblity
  togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
  }


//radium - popular package for react which allows us to use inline styles with psuedo selectors and media queries.
  render() {
    console.log('[App.js] render');
    let persons = null;
    if (this.state.showPersons) {
      persons = 
          <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler} />;
    }


    return (
      <Aux>
          <button 
          onClick={()=> {this.setState({showCockpit:false});
          }}
          >
            Remove Cockpit!
          </button>

          {this.state.showCockpit ? ( 
          <Cockpit 
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          personsLength={this.state.persons.length}
          clicked={this.togglePersonsHandler}/>
          ) : null}
          {persons}
      </Aux>
    );
    // return React.createElement('div',{className: 'App'}, React.createElement('h1',null,'Does this work?'));
  }
}

export default withClass(App,classes.App);