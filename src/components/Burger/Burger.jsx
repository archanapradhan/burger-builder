import React from "react";
import BurgerIngredient from "./BurgerIngredients/BurgerIngredient";
import classes from "./Burger.css";

const burger = (props) => {
  // const transformedIngredients = Object.keys(props.ingredients).map()
  let transformedIngredients = Object.entries(props.ingredients)
    .map(([igKey, igValue]) => {
      console.log(igKey + ": key and val :" + igValue + ". ");
      return [...Array(igValue)].map((_, index) => {
        return <BurgerIngredient key={igKey + index} type={igKey} />;
      });
    })
    .reduce(
      (accumulator, currentValue) => accumulator.concat(currentValue),
      []
    );

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top"></BurgerIngredient>
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom"></BurgerIngredient>
    </div>
  );
};

export default burger;
