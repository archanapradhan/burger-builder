import React from "react";
import Wrap from "../../../hoc/Wrap";
import Button from "../../UI/Button/Button";

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((x) => {
    return (
      <li key={x}>
        <span style={{ textTransform: "capitalize" }}>{x}</span>:
        {props.ingredients[x]}
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
            <strong>Total Price:{props.totalPrice.toFixed(2)}</strong>
          </p>
        </div>
        <p>Continue to Checkout!</p>
        <Button btnType="Danger" clicked={props.orderCancelled}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={props.orderContinued}>
          CONTINUE
        </Button>
      </div>
    </Wrap>
  );
};

export default orderSummary;
