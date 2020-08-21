import React from "react";
import "./section.css";


function Section(props){
    return <div id={props.sectionTitle} className="sectionParent">

    <h2>{props.sectionTitle}</h2>

            <div className="sectionChildren">
            {props.children}
            </div>

    </div>
}
export default Section;
