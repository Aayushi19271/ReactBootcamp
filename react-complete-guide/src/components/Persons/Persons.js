import React, {PureComponent} from 'react';
import  Person from './Person/Person'

//Pure Component already implements shouldComponentUpdate with a complete props check.
class Persons extends PureComponent{ 

    // static getDerivedStateFromProps(props,state){
    //     console.log('[Persons.js] getDerivedStateFromProps',props);
    //     return state; // return updated state
    //   } 

    // componentWillReceiveProps(props){
    //     console.log("[Persons.js]componentWillReceiveProps ");
    // }  

    //if you're sure that in all cases when your parent updates,
    //you will need to update then you should not add shouldComponentUpdate or React Memo
    //because then you will ececute some extra logic that will slow down the application.
    // shouldComponentUpdate(nextProps,nextState){
    //     console.log("[Persons.js]shouldComponentUpdate ");
    //     if(
    //         nextProps.persons !== this.props.persons ||
    //         nextProps.changed !== this.props.changed ||
    //         nextProps.clicked !== this.props.clicked
    //         )
    //         return true;
    //     else
    //         return false;
    // }     
    
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("[Persons.js]getSnapshotBeforeUpdate ");
        return {message: 'SnapShot!'};
    }

    // componentWillUpdate(){

    // }

    componentDidUpdate(prevProps,prevState,snapshot){
        console.log("[Persons.js] componentDidUpdate");
        console.log(snapshot);
    }

    //Clean up 
    componentWillUnmount(){
        console.log('[Persons.js]componentWillUnmount')
    }

    render(){
        console.log('[persons.js] rendering....');    
        return this.props.persons.map((person, index) => {
            return (
              <Person
                click={() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={event => this.props.changed(event, person.id)}
              />
            );
        });
    }
};   
export default Persons;