import React from 'react'
import classes from "./Button.module.css"

const myButton=(props)=>{
    let styleButton=props.styled==="Continue"? classes.Continue :classes.Cancel
    return(
        <div className={[classes.Button , styleButton].join(" ")}>
            {props.children}
        </div>
    )
}
export default myButton;