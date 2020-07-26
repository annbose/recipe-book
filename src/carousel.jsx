import React from "react";

function Carousel(props){

    return <div className="carouselParent">
            <div className="carouselImage">
                <img src={props.imageSource}/>
                <div className="section">{props.section}</div>
            </div>
    </div>
}
export default Carousel;