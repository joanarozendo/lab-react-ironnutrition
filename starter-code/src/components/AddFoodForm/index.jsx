import React, { Component } from "react";
import "./style.css";

class AddFoodForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      calories: "",
      image: ""
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    // this.handleNameInput = this.handleNameInput.bind(this);
    // this.handleCaloriesInput = this.handleCaloriesInput.bind(this);
    // this.handleImageInput = this.handleImageInput.bind(this);
  }

  handleFormSubmit(event) {
    event.preventDefault();
    this.props.addFood(this.state);
    this.setState({
      name: "",
      calories: "",
      image: ""
    });
  }

  handleInputChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    if (name === "name") {
      this.setState({
        name: value
      });
    } else if (name === "calories") {
      this.setState({
        calories: value
      });
    } else if (name === "image") {
      this.setState({
        image: value
      });
    }
  }
    
  // handleNameInput (event) {
  //   this.setState({
  //     name: event.target.value
  //   });
  // };

  // handleCaloriesInput (event) {
  //   this.setState({
  //     calories: event.target.value
  //   });
  // };

  // handleImageInput (event) {
  //   this.setState({
  //     image: event.target.value
  //   });
  // }; 
 
  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            placeholder="Name"
            onChange={e => this.handleInputChange(e)}
            // onChange={e => this.handleNameInput(e)}
          />
          <label>Calories:</label>
          <input
            type="number"
            min="0"
            name="calories"
            value={this.state.calories}
            placeholder="Calories"
            onChange={e => this.handleInputChange(e)}
            // onChange={e => this.handleCaloriesInput(e)}
          />
          <label>Image:</label>
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            checked={this.state.image}
            onChange={e => this.handleInputChange(e)}
            // onChange={e => this.handleImageInput(e)}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddFoodForm;
