import React, { Component } from "react";
import classes from "./Modal.css";
import Wrap from "../../../hoc/Wrap";
import Backdrop from "../Backdrop/Backdrop";
class Modal extends Component {
  state = {};

  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    );
  }

  componentDidUpdate() {
    console.log("[Modal] will update");
  }

  render() {
    return (
      <Wrap>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0",
          }}
          className={classes.Modal}
        >
          <div>{this.props.children}</div>
        </div>
      </Wrap>
    );
  }
}

export default Modal;
