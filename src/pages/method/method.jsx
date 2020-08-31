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
    if (params.category === "snack") {
        categories = snacks
    } else if (params.category === "dessert") {
        categories = desserts
    } else if (params.category === "main") {
        categories = mainCourse
    }

    const name = categories[params.id].recipeName;
    const ingredients = categories[params.id].ingredients;
    const measurements = categories[params.id].measurements;
    const steps = categories[params.id].steps;
    const time=categories[params.id].cookingTime;

    return <div className="Parent">
               <div>
                 <h1 className="name">{name}</h1>
                 <p>Cooks in : {time}</p>
                     <table className="ingredientTable">
                        <thead>
                            <tr>
                                <th colSpan={2}><h2>Ingredients</h2></th>
                                <th colSpan={2}><h2>Measurements</h2></th>
                            </tr>
                        </thead>
                         <tbody>
                             {ingredients.map((ingredient, index)=>{
                                    return <tr key={index}>
                                        <td>
                                            {index+1}.
                                        </td>
                                        <td>
                                            {ingredient}
                                        </td>
                                        <td>
                                        </td>
                                        <td>
                                            {measurements[index]}
                                        </td>
                                    </tr>
                                    })
                                 }
                            </tbody>
                        </table>
           
            <h2>Method</h2>
            <ol className="methodOl">
                {steps.map((step1, index) => {
                        return <li key={index}>{step1}</li>
                    })
                }
            </ol>
        </div>
    </div>
}

export default Method;