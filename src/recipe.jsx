import React from "react";
import "./recipe.css";
import { Link } from "react-router-dom";

function Recipe(props) {
    // console.log(props)
    let styles = {
        backgroundImage: `url( ${props.imgSource} )`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "200px",
        // width:"200px"
    }

    function handleRecipeItemClick(){
        console.log(props.id)

    }

    return <Link to={`/method/${props.category}/${props.id}`} >
        <div className="recipeParent" id="recipeItem" onClick={handleRecipeItemClick}>
            <div className="recipeImg" style={styles}></div>
            {/* <img src={props.imgSource} alt="dish"></img> */}

            <div className="recipeDescription">
                <h3>{props.recipeName}</h3>
                {/* <h5>
                    time {props.cookingTime}
                </h5> */}
            </div>
        </div>
    </Link>
}

function RecipeList(props) {
    
   return props.recipes.map((recipe, index) => {
        return <Recipe
            key={index}
            id={recipe.id}
            category={recipe.category}
            imgSource={recipe.imgSource}
            recipeName={recipe.recipeName}
            // cookingTime={recipe.cookingTime}
        />
    })
}
export default RecipeList;