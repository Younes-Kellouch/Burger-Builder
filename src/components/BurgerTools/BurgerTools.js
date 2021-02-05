import React from 'react'
import Tool from './Tool/Tool';
import classes from "./BurgerTools.module.css"

const BurgerTools = (props)=>{
    let disabledRemoveClick,disabledAdd;  
  return(
      <div className={classes.ToolsContainer}>
          { props.ingredients.map((ingredient,index)=>{
              disabledRemoveClick= ingredient.nbrClick===0;
              disabledAdd=ingredient.nbrClick>=ingredient.max;
              return(
                    <Tool 
                        key={ingredient.id}
                        emoji={ingredient.emoji}
                        name={ingredient.name} 
                        price={ingredient.price}
                        number={ingredient.nbrClick}
                        max={ingredient.max}
                        add={()=>props.add(index)}
                        remove={()=>props.remove(index)}
                        disabledRemove={disabledRemoveClick}
                        disabledAdd={disabledAdd}
                    />
              )
          })}
      </div>
  )
}

export default BurgerTools;