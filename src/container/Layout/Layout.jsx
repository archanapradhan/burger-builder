import React, { Component } from "react";
import Wrap from "../../hoc/Wrap";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import classes from "./Layout.css";

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  closeSidedrawerHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <Wrap>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.closeSidedrawerHandler}
        ></SideDrawer>
        <main className={classes.Content}>{this.props.children}</main>
      </Wrap>
    );
  }
}

export default Layout;
