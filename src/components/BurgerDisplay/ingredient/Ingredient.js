import React from 'react';
import classes from "./Ingredient.module.css"

const ingredient = (props) => {
    let ingredient=null;
    switch(props.name){

        case("Meat"):
            ingredient=<div className={classes.Meat}></div>
        break;
        
        case("Salad"):
            ingredient=<div className={classes.Salad}></div>
        break;
        
        case("Egg"):
            ingredient=<div className={classes.Egg}></div>
        break;
        
        case("Cheese"):
            ingredient=<div className={classes.Cheese}></div>
        break;

        default:
            ingredient=null;
    } 
    return ingredient;   
    
}

export default ingredient;