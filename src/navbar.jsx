import React, { useState } from "react";
import "./navbar.css";


function Navbar() {

    const [dropDown, setdropDown] = useState(false)

    function handleChange(event) {
        console.log(event.target.value)
    }

    function handleSearchClick() {
        console.log("i gt clicked")

    }
    function handleBarsClick() {
        setdropDown(function (prevValue) { return !prevValue })
    }


    return <div className="navParent">

        <h1 className="logo">Ann's Recipes</h1>


        
            <ul className="navItems">
                <li> <div><input  onChange={handleChange} ></input>
                    <i onClick={handleSearchClick} class="fas fa-search"></i>
                </div>
                </li>
                <li><a href="#">CURRIES</a></li>
                <li><a href="#">SNACKS</a></li>
                <li><a href="#">DESSERTS</a></li>
                <li><a href="#">MAIN COURSE</a></li>
            </ul>
        

        <i onClick={handleBarsClick} class="fas fa-bars"></i>

        {dropDown &&

            <div className="dropDown">
                <ul>
                    <li> <div><input  onChange={handleChange} ></input>
                        <i onClick={handleSearchClick} class="fas fa-search"></i>
                    </div>
                    </li>
                    <li><a href="#">CURRIES</a></li>
                    <li><a href="#">SNACKS</a></li>
                    <li><a href="#">DESSERTS</a></li>
                    <li><a href="#">MAIN COURSE</a></li>
                </ul>

            </div>
        }

        {/* <i class="fas fa-caret-down"></i> */}


    </div>
}
export default Navbar;