import React from 'react'
import Ingredient from "./ingredient/Ingredient"
import classes from "./BurgerDisplay.module.css";

const BurgerDisplay = (props)=>{
    let BurgerIngredients=props.ingredients.map( (ingredient) =>{

        return [...Array(ingredient.nbrClick)].map( ( _,index )=>{
            return (
                <Ingredient key={ingredient.name + index} name={ingredient.name}/>
            )
        })
    }).reduce((startValue,currentValue)=>startValue.concat(currentValue),[])

    if(BurgerIngredients.length===0)
        BurgerIngredients=<h2>please start choosing ingredients!</h2>

    return(
        <div className={classes.Burger}>   
                <div className={classes.BreadTop}></div>
                {BurgerIngredients}
                <div className={classes.BreadButtom}></div>
                <h2>Total price : $ {props.total}</h2>
                
        </div>
    );
}

export default BurgerDisplay;