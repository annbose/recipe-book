import React from "react";
import "./method.css";
import {useParams} from "react-router-dom";
import curries from "../../itemsData/curriesData.json";

function Method (props){
    const params = useParams()
    console.log(params.category)
    const id=(params.id)
    const details =curries.id;
    console.log(details)
    return <div className="Parent">
        <div>
            <h1>recipeName</h1>
            <h2>Ingredients</h2>
            <ol>
                <li></li>
                <li></li>
                <li></li>
            </ol>
            <h2>Method</h2>
            <ol>
                <li>
                It specifies the initial size of the flex item
                </li>
                <li>
                before any available space is distributed according to the flex factors. When omitted from the flex shorthand, its specified value is the length zero.
                </li>
                <li>
                A flex-basis value set to auto sizes the element according to its size property (which can itself be the keyword auto, which sizes
                </li>
            </ol>
           
        </div>

    </div>
}

export default Method;