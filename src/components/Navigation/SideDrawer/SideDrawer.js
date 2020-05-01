import React from "react";
import classes from "./SideDrawer.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../../Navigation/NavigationItems/NavigationItems";

const sideDrawer = (props) => {
  //some functions for open close animations
  return (
    <div className={classes.SideDrawer}>
      <Logo />
      <nav>
        <NavigationItems></NavigationItems>
      </nav>
    </div>
  );
};

export default sideDrawer;
