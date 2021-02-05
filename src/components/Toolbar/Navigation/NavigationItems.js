import React from 'react'
import classes from "./NavigationItems.module.css"
const navigationItems=()=>{
    return(
        <ul className={classes.NavigationItems}>
            <li className={classes.NavigationItem}><a href="/" className={classes.Active}>Burger Builder</a></li>
            <li className={classes.NavigationItem}><a href="/">Check Out</a></li>
        </ul>
    )
}

export default navigationItems;