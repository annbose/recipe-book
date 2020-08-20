import React from "react";
import "./method.css";
import { useParams } from "react-router-dom";
import curries from "../../itemsData/curriesData.json";
import desserts from "../../itemsData/dessertsData.json";
import snacks from "../../itemsData/snacksData.json";
import mainCourse from "../../itemsData/mainCourseData.json";

function Method(props) {
    const params = useParams()

    let categories = curries
    if (params.category === "snacks") {
        categories = snacks
    } else if (params.category === "dessert") {
        categories = desserts
    } else if (params.category === "main") {
        categories = mainCourse
    }

    const name = categories[params.id].recipeName;
    const ingredients = categories[params.id].ingredients;
    const steps = categories[params.id].steps;

    return <div className="Parent">
        <div>
            <h1>{name}</h1>
            <h2>Ingredients</h2>
            <ol>
                {
                    ingredients.map((ing1, index) => {
                        return <li key={index}>{ing1}</li>
                    })
                }
            </ol>

            <h2>Method</h2>
            
            <ol>
                {
                    steps.map((step1, index) => {
                        return <li key={index}>{step1}</li>
                    })
                }

            </ol>
        </div>
    </div>
}

export default Method;