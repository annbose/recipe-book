import React from "react";
import "./carousel.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function Carousel(){

    //  <div className="carouselParent">
    //         <div className="carousel">
    //             {/* <img className="carouselImage" src={props.imageSource}/>
    //             <div className="section">{props.section}</div> */}
    //         </div>
    // </div>

    var settings = {
        dots: true,
        infinite: true,
        speed: 100,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return <Slider {...settings} className="sliderParent">
    <div className="carouselParent">
         <img className="carouselImage"src="./images/curries.jpg" alt="curry img"/>
         <h3>Curries</h3>
    </div>
    <div className="carouselParent">
        <img className="carouselImage" src ="./images/desserts.jpg" alt="dessert img" />
        <h3>Desserts</h3>
    </div>
    <div className="carouselParent">
        <img className="carouselImage" src ="./images/snacks.jpg" alt="snacks img" />
        <h3>Snacks</h3>
    </div>
    <div className="carouselParent">
        <img className="carouselImage" src ="./images/main course.jpg" alt="main course img" />
        <h3>Main Course</h3>
    </div>
    </Slider>
       
        
    
}

export default Carousel;