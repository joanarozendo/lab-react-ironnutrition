import React, { Component } from "react";
import "./App.scss";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";

import foods from "./foods.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: foods,
      showForm: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.triggerAddForm = this.triggerAddForm.bind(this);
    this.addFoodHandler = this.addFoodHandler.bind(this);
  }

  handleClick() {
    console.log("hello there");
  }

  triggerAddForm() {
    this.setState({
      showForm: !this.state.showForm
    });
  }

  addFoodHandler(food) {
    const foodsCopy = [...this.state.foods];
    foodsCopy.push(food);
    this.setState({
      foods: foodsCopy
    });
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.triggerAddForm}>Add food</button>
        {this.state.showForm && <AddFoodForm addFood={this.addFoodHandler} />}
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
