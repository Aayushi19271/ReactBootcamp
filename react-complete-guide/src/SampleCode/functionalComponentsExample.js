// import React, { useState } from 'react';
// import './App.css';
// import  Person from './Person/Person'

// //functional component vs class based components
// //statefull components - smart/container components
// const App = props => {
//   const [ personsState,setPersonsState ] = useState({
//     persons: [
//       {name: 'Max', age: 28},
//       {name: 'Sanu', age: 28},
//       {name: 'Sunny', age: 28},
//     ],
//     otherState: 'set another state'
//   });

//   const [otherState,setOtherState] = useState('some other value');

//   console.log(personsState,otherState);

//   const switchNameHandler = () => {
//     //console.log("Was Clicked!");
//     //DON'T DO THIS - this.state.persons[0].name = "Aayushi";
//     setPersonsState({
//       persons: [
//       {name: 'Aayushi', age: 28},
//       {name: 'Sanu', age: 28},
//       {name: 'Akhil', age: 28},
//     ]
//   })
//   }

//     return (
//       <div className="App">
//         <h1>Hi, I'm a React App</h1>
//         <p>This is really working!!</p>
//         <button onClick={switchNameHandler}>Switch Name</button>
//         <Person name = {personsState.persons[0].name} age ={personsState.persons[0].age}/>
//         <Person name = {personsState.persons[1].name} age ={personsState.persons[1].age}>My Hobbie: Racing</Person>
//         <Person name = {personsState.persons[2].name} age ={personsState.persons[2].age}/>
//       </div>
//     );
//     // return React.createElement('div',{className: 'App'}, React.createElement('h1',null,'Does this work?'));
// }

// export default App;


