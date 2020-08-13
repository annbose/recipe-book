import React from "react";
import "./recipe.css";
import { Link } from "react-router-dom";

function Recipe(props) {

    let styles = {
        backgroundImage: `url( ${props.imgSource} )`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "200px",
        // width:"200px"
    }

    return <Link to="/method" >
             <div className="recipeParent" >
                 <div className="recipeImg" style={styles}></div>
                     {/* <img src={props.imgSource} alt="dish"></img> */}

                 <div className="recipeDescription">
                     <h3>{props.recipeName}</h3>
                         <h5>
                             time {props.cookingTime}
                        </h5>
                 </div>
             </div>
    </Link>
}

function Recipes(props){

}
export default Recipes;