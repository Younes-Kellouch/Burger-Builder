import React from 'react'
import classes from "./Tool.module.css"

let ButtonAdd=[];
ButtonAdd.push(classes.Button);
ButtonAdd.push(classes.Add);
let ButtonRemove=[];
ButtonRemove.push(classes.Button);
ButtonRemove.push(classes.Remove);

const Tool=(props)=>{
    return(
        <div className={classes.Tool}>
            <div className={classes.Infos}>  
                <p>
                    {props.emoji}
                </p>
                <p>
                    {props.name} ( ${props.price} )
                </p>
            </div>
            <p className={classes.Number}>{props.number}/{props.max}</p>
            <button onClick={props.add} className={ButtonAdd.join(" ")}  disabled={props.disabledAdd} >+</button>
            <button onClick={props.remove} className={ButtonRemove.join(" ")} disabled={props.disabledRemove}>-</button>
        </div>
    )
}

export default Tool;