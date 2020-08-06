import React from "react";
import "./recipe.css";

function Recipe(props) {

    let styles = {
        backgroundImage: `url( ${props.imgSource} )`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "60%"
    }

    return <div className="recipeParent">
        <div style={ styles }></div>
        {/* <img src={props.imgSource} alt="dish"></img> */}

        <div>
            <h3>{props.recipeName}</h3>
            <h5>
                time {props.cookingTime}
            </h5>
        </div>
    </div>
}

export default Recipe;