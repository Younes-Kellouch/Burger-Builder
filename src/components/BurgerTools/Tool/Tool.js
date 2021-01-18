import React from 'react'
import classes from "./Tool.module.css"
const Tool=(props)=>{
    return(
        <div className={classes.Tool}>
            <p>{props.emoji} {props.name}( ${props.price} )</p>
            <p>number : {props.number}</p>
            <button onClick={props.add} className={classes.Button} >+</button>
            <button onClick={props.remove} className={classes.Button} >-</button>
        </div>
    )
}

export default Tool;