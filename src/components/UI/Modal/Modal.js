import React from "react";
import classes from "./Modal.css";
import Wrap from "../../../hoc/Wrap";
import Backdrop from "../Backdrop/Backdrop";

const modal = (props) => {
  return (
    <Wrap>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0",
        }}
        className={classes.Modal}
      >
        <p>{props.children}</p>
      </div>
    </Wrap>
  );
};

export default modal;
