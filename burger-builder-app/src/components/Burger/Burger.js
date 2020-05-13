import React from 'react'
import classes from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
// import { withRouter } from 'react-router-dom';

//the props recieve the ingredients from BurgerBuilder.js
const burger = (props) => {
    console.log(props);
    //transform the object into array to map.
    //give us the array of strings of keys
    let transformedIngredients= Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_,i) => {
                return <BurgerIngredient key={igKey+i} type={igKey} />
            });
        })
        .reduce((arr,el)=>{
            return arr.concat(el);
        },[]);
        if(transformedIngredients.length===0){
            transformedIngredients = <p>Please Start Adding ingredients!</p>
        }

    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;

// If you ever need direct access to match history and location 
// and you don't want to manually pass
// it on from the top level component, you can use withRouter.
// export default withRouter(burger);
