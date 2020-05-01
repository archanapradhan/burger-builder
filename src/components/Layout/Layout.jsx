import React from "react";
import Wrap from "../../hoc/Wrap";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import classes from "./Layout.css";

const layout = (props) => (
  <Wrap>
    <Toolbar />
    <SideDrawer></SideDrawer>
    <main className={classes.Content}>{props.children}</main>
  </Wrap>
);

export default layout;
