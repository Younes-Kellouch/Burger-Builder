import React from 'react'
import Tool from './Tool/Tool';
import classes from "./BurgerTools.module.css"

const BurgerTools = (props)=>{
  return(
      <div className={classes.ToolsContainer}>
          {props.ingredients.map((ingredient,index)=>{
              return(
                    <Tool 
                        key={ingredient.id}
                        emoji={ingredient.emoji}
                        name={ingredient.name} 
                        price={ingredient.price}
                        number={ingredient.nbrClick}
                        add={()=>props.add(index)}
                        remove={()=>props.remove(index)}
                    />
              )
          })}
      </div>
  )
}

export default BurgerTools;