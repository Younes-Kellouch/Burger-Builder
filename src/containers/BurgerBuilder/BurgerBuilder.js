import React, { Component } from 'react'
import BurgerDisplay from '../../components/BurgerDisplay/BurgerDisplay'
import BurgerTools from '../../components/BurgerTools/BurgerTools'
import classes from "./BurgerBuilder.module.css"

class BurgerBuilder extends Component {
    state={
        ingredients:[
            {id:1, name:"Meat", price:2 , emoji:"🥩" , nbrClick:0 },
            {id:2, name:"potato", price:3 , emoji:"🥔", nbrClick:0 },
            {id:3, name:"egg", price:1 , emoji:"🍳", nbrClick:0 },
            {id:4, name:"sheeze" , price:1 , emoji:"🧀" ,nbrClick:0}
        ]
    }
    addIngredient = (index) =>{
        let ingredientsCopie=[...this.state.ingredients];
        ingredientsCopie[index].nbrClick++;
        this.setState(
            {
                ingredients:ingredientsCopie
            }
        )
    }
    removeIngredient = (index) =>{
        let ingredientsCopie=[...this.state.ingredients];
        if(ingredientsCopie[index].nbrClick!==0)
            ingredientsCopie[index].nbrClick--;
        this.setState(
            {
                ingredients:ingredientsCopie
            }
        )
    }

    calculTotal=()=>{
        let total=0;
        this.state.ingredients.map((ingredient)=>{
            total+=ingredient.nbrClick*ingredient.price;
            return total;
        })
        return total;
    }
    render() {
        return (
            <div className={classes.BurgerBuilder}>
                <h1 className={classes.h1}>Hi welcome to my first React Project</h1>
                <BurgerDisplay
                    total={this.calculTotal()}
                    ingredients={this.state.ingredients}
                />
                <BurgerTools 
                    ingredients={this.state.ingredients}
                    add={this.addIngredient}
                    remove={this.removeIngredient} 
                />      
            </div>
        )
    }
}

export default BurgerBuilder;
