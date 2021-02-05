import React from 'react'
import classes from "./PopUp.module.css"
import Button from "../Button/Button"
const popUp = (props)=>{
    return(
        <div 
            className={classes.PopUp} 
            style={
                    {transform: props.show ? "translateY(0)" : "translateY(-90vh)"}
            }
        >
            <h2>Your Order:</h2>
            <p>
                A delicious Burger with the following ingredients:
            </p>
            <ul>
                {props.ingredients.map((ingredient)=>{
                    if(ingredient.nbrClick!=0)
                        return <li key={ingredient.name} style={{marginBottom:"10px"}}>{ingredient.name} : {ingredient.nbrClick}</li>
                })}
            </ul>
            <div className={classes.Buttons}>
                <Button styled="Continue">
                    CONTINUE
                </Button>
                
                <Button styled="Cancel">
                    CANCEL
                </Button>
            
            </div>
        </div>
    )
}

export default popUp;