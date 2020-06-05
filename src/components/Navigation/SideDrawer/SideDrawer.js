import React from "react";
import classes from "./SideDrawer.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../../Navigation/NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Wrap from "../../../hoc/Wrap";
// import backdrop from "../../UI/Backdrop/Backdrop";
// import burgerLogo from "../../assets/Images/burgerLogo.png";

const sideDrawer = (props) => {
  //some functions for open close animations
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }
  return (
    <Wrap>
      <Backdrop show={props.open} clicked={props.closed}></Backdrop>
      <div className={attachedClasses.join(" ")}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems></NavigationItems>
        </nav>
      </div>
    </Wrap>
  );
};

export default sideDrawer;
