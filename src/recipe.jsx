import React from "react";
import "./recipe.css";
import { Link } from "react-router-dom";

function RecipeTile(props) {
    
    let styles = {
        // backgroundImage: "linear-gradient(rgba(255,255,255,0.4),rgba(255,255,255,0.1))",
        backgroundImage:  `url( ${props.imgSource} )`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "200px",
        // width:"200px"
    }

    function handleRecipeItemClick() {
        console.log(props.id)

    }

    // return <Link to={`/method/ ${props.category} / ${props.id} `} >
    return <Link to={"/method/" + props.category + "/" + props.id} >
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
        return < RecipeTile
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