import React from "react";
import "./recipe.css";

function Recipe(props){

return <div className="recipeParent">
    
    <img src={props.imgSource} alt="dish"></img>
    
    <div>
        <h3>{props.recipeName}</h3>
        <h5>
            time {props.cookingTime}
        </h5>
    </div>
</div>

}
export default Recipe;