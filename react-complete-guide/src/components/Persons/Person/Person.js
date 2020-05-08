import React, {Component} from 'react';
import classes from './Person.css';
import Aux from '../../../hoc/Aux';
import PropTypes from 'prop-types';


//functional presentational components -stateless components
//presentational/stateless/dumb components
class Person extends Component {
// return <p>I'm a {props.name} and I am {Math.floor(Math.random() * 30)} years Old!</p>
    

    // const style= {
    //     '@media(min-width: 500px)': {
    //         width: '450px'
    //     }
    // };


    // static getDerivedStateFromProps(props,state){
    //   console.log('[Person.js] getDerivedStateFromProps',props);
    //   return state; // return updated state
    // } 

    render(){
      console.log('[person.js] rendering....');    

      return (
        <Aux>
          <div className={classes.Person}>
            <p onClick={this.props.click}>
              I'm {this.props.name} and I am {this.props.age} years old!
            </p>
            <p>{this.props.children}</p>
            <input 
            type="text" 
            onChange={this.props.changed} 
            value={this.props.name} />
          </div>
          </Aux>
        );

      }
   
};

Person.propTypes ={
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default Person;
