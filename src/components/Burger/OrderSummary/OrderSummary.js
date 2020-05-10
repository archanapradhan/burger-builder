import React, { Component } from "react";
import Wrap from "../../../hoc/Wrap";
import Button from "../../UI/Button/Button";
class OrderSummary extends Component {
  state = {};

  componentDidUpdate() {
    console.log("[OrderSummary] will update.");
  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map((x) => {
      return (
        <li key={x}>
          <span style={{ textTransform: "capitalize" }}>{x}</span>:
          {this.props.ingredients[x]}
        </li>
      );
    });

    return (
      <Wrap>
        <div style={{ color: "black" }}>
          <h3>Your Order</h3>
          <div style={{ fontFamily: "Cookie", fontSize: "1.5rem" }}>
            <p>A delicious burger with the following ingredients:</p>
            <ul>{ingredientSummary}</ul>
            <p>
              <strong>Total Price:{this.props.totalPrice.toFixed(2)}</strong>
              <br />
              Continue to Checkout!
            </p>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <Button btnType="Danger" clicked={this.props.orderCancelled}>
            CANCEL
          </Button>
          <Button btnType="Success" clicked={this.props.orderContinued}>
            CONTINUE
          </Button>
        </div>
      </Wrap>
    );
  }
}

export default OrderSummary;
