import React from 'react'
import classes from "./Toolbar.module.css"
import BurgerLogo from "./BurgerLogo/BurgerLogo"
import NavigationItems from "./Navigation/NavigationItems"
const toolbar= (props)=>{
    return(
        <header className={classes.Toolbar}>
            <div>Menu</div>
            <BurgerLogo/>
            <NavigationItems/>
        </header>
    )
}

export default toolbar;