import React from 'react'
import PathImage from "../../../Images/burger-Image.png"
import classes from "./BurgerLogo.module.css"
const burgerLogo=(props)=>{
    return(
        <div className={classes.BurgerLogo}>
            <img src={PathImage} alt="my Burger's Logo"/>
        </div>
    )
}

export default burgerLogo;