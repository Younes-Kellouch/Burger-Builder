import React, { Component } from 'react'
import BurgerDisplay from '../../components/BurgerDisplay/BurgerDisplay'
import BurgerTools from '../../components/BurgerTools/BurgerTools'
import classes from "./BurgerBuilder.module.css"
import Toolbar from "../../components/Toolbar/Toolbar"
import PopUp from '../../components/UI/PopUp/PopUp'
import BackDrop from "../../components/UI/BackDrop/BackDrop"
 class BurgerBuilder extends Component {
    state={
        ingredients:[
            {id:1, name:"Meat", price:3 , emoji:"🥩" , nbrClick:0,max:2},
            {id:4, name:"Cheese" , price:1 , emoji:"🧀" ,nbrClick:0,max:3},
            {id:2, name:"Salad", price:2 , emoji:"🍀", nbrClick:0,max:2},
            {id:3, name:"Egg", price:1 , emoji:"🍳", nbrClick:0,max:2}
        ],
        totalPrice:0,
        purchsable:false,
        showPopUp:false
    }
    addIngredient = (index) =>{
        let ingredientsCopie=[...this.state.ingredients];
        ingredientsCopie[index].nbrClick++;
        
        this.setState(
            {
                ingredients:ingredientsCopie
            }
        )
        
        this.calculTotal(ingredientsCopie);
    }
    removeIngredient = (index) =>{
        let ingredientsCopie=[...this.state.ingredients];
        //if(ingredientsCopie[index].nbrClick!==0)    we did it with disabled attribute of the button
        ingredientsCopie[index].nbrClick--;
        
        this.setState(
            {
                ingredients:ingredientsCopie
            }
        )
        
        this.calculTotal(ingredientsCopie);
       
    }
    calculTotal=(ingredients)=>{
        let total=ingredients.map((ingredient)=>ingredient).reduce((startValue,nextIngredient)=>{
            return startValue + ( nextIngredient.nbrClick * nextIngredient.price );
        } , 0);
        
        this.setState({
            totalPrice:total
        })

        this.checkPurshase(total);
    }

    checkPurshase=(totalPrice)=>{
        let isPurchsable;
        const total=totalPrice;
        total===0 ? isPurchsable=false : isPurchsable=true; 
        this.setState(
            {
                purchsable:isPurchsable
            }
        )
    }

    showPopUpHandler=()=>{
        let show=true;
        this.setState({
            showPopUp:show
        })
    }

    hidePopUpHandler=()=>{
        let show=false;
        this.setState({
            showPopUp:show
        })
    }
    render() {

        return (
            <div className={classes.BurgerBuilder}>
                <Toolbar/>
                <BurgerDisplay
                    total={this.state.totalPrice}
                    ingredients={this.state.ingredients}
                />
                <div className={classes.Tools}>
                    <BurgerTools 
                        ingredients={this.state.ingredients}
                        add={this.addIngredient}
                        remove={this.removeIngredient} 
                    />
                    <button 
                        disabled={!this.state.purchsable}
                        className={classes.OrderButton}
                        onClick={this.showPopUpHandler}
                    >
                        ORDER NOW
                    </button>
                </div>
                <PopUp  
                    ingredients={this.state.ingredients}
                    show={this.state.showPopUp}
                />  
                <BackDrop
                    show={this.state.showPopUp}
                    clicked={this.hidePopUpHandler}
                />
                
            </div>
        )
    }
}

export default BurgerBuilder;
