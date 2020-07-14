import React, { Component } from "react";
import Wrap from "../../hoc/Wrap";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from "../../axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
    readyForOrder: false,
    orderPlaced: false,
    loading: false,
  };

  updateReadyToOrderState(ingredients) {
    // const ingredients = {
    //   ...this.state.ingredients,
    // }; recieving the updated state will be more accurate than accessing state directly. State is not updated by the time we are accessing it

    let sum = Object.values(ingredients).reduce((acc, cur) => {
      return acc + cur;
    }, 0);

    this.setState({ readyForOrder: sum > 0 });
  }

  orderPlacedHandler = () => {
    this.setState({ orderPlaced: true });
  };

  orderCancelledHandler = () => {
    this.setState({ orderPlaced: false });
  };

  orderContinuedHandler = () => {
    // alert("Order Placed");
    this.setState({ loading: true });
    const orders = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: "Archana Pradhan",
        address: {
          street: "Cuba Street",
          zipCode: "6011",
          country: "New Zealand",
        },
        email: "archana.pradhan.nz@gmail.com",
      },
      deliveryMethod: "fastest",
    };
    axios
      .post("/orders.json", orders)
      .then((response) => {
        this.setState({ loading: false, orderPlaced: false });
        console.log(response);
      })
      .catch((error) => {
        this.setState({ loading: false, orderPlaced: false });
        console.log(error);
      });
  };

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;

    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updateReadyToOrderState(updatedIngredients);
  };

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;

    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updateReadyToOrderState(updatedIngredients);
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients,
    }; //restructured object with boolean values
    //{salad: true, meat:false, ...}

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = (
      <OrderSummary
        ingredients={this.state.ingredients}
        orderContinued={this.orderContinuedHandler}
        totalPrice={this.state.totalPrice}
        orderCancelled={this.orderCancelledHandler}
      ></OrderSummary>
    );

    return (
      <Wrap>
        <Modal
          show={this.state.orderPlaced}
          modalClosed={this.orderCancelledHandler}
        >
          {this.state.loading ? <Spinner /> : orderSummary}
        </Modal>
        <Burger ingredients={this.state.ingredients}></Burger>
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          readyForOrder={this.state.readyForOrder}
          ordered={this.orderPlacedHandler}
        ></BuildControls>
      </Wrap>
    );
  }
}

export default BurgerBuilder;
