import React from 'react'
import classes from "./BackDrop.module.css"
const backdrop=(props)=>{
    let showBackDrop=props.show ? classes.Show :classes.Hide;
    return(
        <div 
            className={[classes.BackDrop , showBackDrop].join(" ")}
            onClick={props.clicked}
        >
        </div>
    )
}

export default backdrop;