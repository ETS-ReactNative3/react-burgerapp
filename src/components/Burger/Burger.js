import React from 'react';

import classes from './Burger.css';
import Ingredient from './Ingredients/Ingredients.js';

const burger = (props) => {
    let transformedIngredienst = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <Ingredient key={igKey + i} type={igKey} />
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);

    if (transformedIngredienst.length === 0) {
        transformedIngredienst = <p>Please start adding ingredients!</p>;
    }

    return (
        <div className={classes.Burger}>
            <Ingredient type="bread-top" />
            {transformedIngredienst}
            <Ingredient type="bread-bottom" />
        </div>
    );
  }

  export default burger;