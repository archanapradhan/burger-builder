import React from "react";
import BurgerIngredient from "./BurgerIngredients/BurgerIngredient";
import classes from "./Burger.css";

const burger = (props) => {
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top"></BurgerIngredient>
      <BurgerIngredient type="cheese"></BurgerIngredient>
      <BurgerIngredient type="meat"></BurgerIngredient>
      <BurgerIngredient type="bread-bottom"></BurgerIngredient>
    </div>
  );
};

export default burger;
