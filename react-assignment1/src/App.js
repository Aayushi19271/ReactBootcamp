import React, { Component } from 'react';
import './App.css';
import Fruit from './Fruit/Fruit'


class App extends Component {
  state = {
    fruits : [ ]
  }

  fruitPopulation = () => {
    const tempPopulate = [...this.state.fruits];
    return tempPopulate.map((x,key)=> {
      return (
        <Fruit  key={key} value = {x}  deleteMethod = {this.deleteFruitHandler}/>
        );
      });
  }

  deleteFruitHandler = (fruitIndex) => {
    const fruits = [...this.state.fruits];
    fruits.splice(fruitIndex,1);
    this.setState({fruits:fruits})
  }


  handleSubmit = (event) => {
    event.preventDefault();
    const fruitName = this.temp;
    let tempFruit= fruitName.split("-"); 
    const fruits = [...this.state.fruits, {name:tempFruit[0],quantity:parseInt(tempFruit[1])}];
    this.setState({fruits : fruits})    
    event.target.reset();
  }

  temp = null;

  addFruitsHandler = (event) => {
    let input= event.target.value;
    this.temp = input;
    console.log(input);
  }


  render() {
    return (
      <div className="App">
        <h1>Fruit List</h1>
        <form onSubmit={this.handleSubmit} id="InputForm">
          <h4>Enter the Fruit name and Quantity: </h4>

            <input type="text" 
                  name='name' 
                  id='name'
                  value={this.state.value}
                  onChange={this.addFruitsHandler}>
            </input>

          <br></br><br></br>
          <button type="submit">Submit!</button>
        </form> 
        <br></br><br></br>
        {this.fruitPopulation()}
      </div> 
    );
  }
}

export default App;
