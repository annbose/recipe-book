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

    function handleBarsClick(event) {

            setdropDown(function (prevValue) { return !prevValue })
        
    }

    function handleEmptySpaceClick(event){
        if (event.target.id==="ddParent" || event.target.id==="bars"){
            setdropDown(function (prevValue) { return !prevValue })

        }
    }

    return <div className="navParent">

        <h1 className="logo">Ann's Recipes</h1>

        <ul className="navItems">
            <li> <div><input onChange={handleChange} ></input>
                <i onClick={handleSearchClick} className="fas fa-search"></i>
            </div>
            </li>
            <li><a href="#">CURRIES</a></li>
            <li><a href="#">SNACKS</a></li>
            <li><a href="#">DESSERTS</a></li>
            <li><a href="#">MAIN COURSE</a></li>
        </ul>

        <i onClick={handleBarsClick} id="bars" className="fas fa-bars"></i>

        {dropDown &&
            <div id="ddParent" className="dropdownParent" onClick={handleEmptySpaceClick}>
            <div id="ddChild" className="dropdown" >
                <ul>
                    <li className="search">
                        <div >
                            <input  onChange={handleChange} ></input>
                            <i onClick={handleSearchClick} className="fas fa-search"></i>
                        </div>
                    </li>
                    <li><a href="#">CURRIES</a></li>
                    <li><a href="#">SNACKS</a></li>
                    <li><a href="#">DESSERTS</a></li>
                    <li><a href="#">MAIN COURSE</a></li>
                </ul>

            </div>
            </div> 
        }

        {/* <i class="fas fa-caret-down"></i> */}


    </div>
}
export default Navbar;