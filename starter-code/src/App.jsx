import React, { Component } from "react";
import "./App.scss";
import FoodBox from "./components/FoodBox";
import Form from "./components/Form";

import foods from "./foods.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: foods,
      forms: Form,
      displayForm: false
    };
    this.handleClick = this.handleClick.bind(this);
    // this.displayForm = this.displayForm.bind(this);
  }

  handleClick()
    {
        console.log("hello there");
        
    }

  addFoodHandler = food => {
    const foodsCopy = [...this.state.foods];
    foodsCopy.push(food);
    this.setState({
      foods: foodsCopy
    });
  };
/* 
  displayForm = () => {
    this.setState({
      displayForm: !this.state.displayForm
    });
  }; */

  render() {
    return (
      <div className="App">
        <button onClick={this.handleClick} /* className="btn btn-light" */>
          Add food
        </button>
        <Form addFood={this.addFoodHandler} />
        {this.state.foods.map((food, index) => (
          <FoodBox
            key={index}
            name={food.name}
            calories={food.calories}
            image={food.image}
            quantity={food.quantity}
          />
        ))}
      </div>
    );
  }
}

export default App;
