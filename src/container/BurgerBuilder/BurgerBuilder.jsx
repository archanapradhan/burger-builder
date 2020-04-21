import React, { Component } from "react";
import Wrap from "../../hoc/Wrap";

class BurgerBuilder extends Component {
  state = {};
  render() {
    return (
      <Wrap>
        <div>Graphical Rep Burger</div>
        <div>Add/Remove Ingredients</div>
      </Wrap>
    );
  }
}

export default BurgerBuilder;
