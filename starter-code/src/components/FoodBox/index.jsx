import React, { Component } from "react";
import "./FoodBox.css";

class FoodBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      calories: this.props.calories,
      image: this.props.image,
      quantity: this.props.quantity
    };
  }

  handleQuantityInput = event => {
    this.setState({
      quantity: event.target.value
    });
  };

  render() {
    return (
      <div className="media">
        <img
          src={this.state.image}
          className="img-thumbnail mr-3 mw-25 border-0"
          style={{ maxWidth: "10em" }}
          alt="myimg"
        />
        <div className="media-body align-self-center">
          <h5 className="mt-0 mb-1">{this.state.name}</h5>
          <small>{this.state.calories} cal</small>
        </div>
        <form className="row align-self-center">
          <input
            className="form-control col-9"
            type="number"
            name="quantity"
            value={this.state.quantity}
            onChange={e => this.handleQuantityInput(e)}
          />
          <button onClick={this.handleQuantityInput} className="btn btn-primary col-3">+</button>
        </form>
      </div>
    );
  }
}

export default FoodBox;
