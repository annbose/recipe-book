import React, { useState } from "react";
import "./navbar.css";
import Search from "./components/search";


function Navbar() {

    const [dropDown, setdropDown] = useState(false);
    
    

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
            <li> 
                <Search />
            </li>
            <li><a href="#Curries">CURRIES</a></li>
            <li><a href="#Snacks">SNACKS</a></li>
            <li><a href="#Desserts">DESSERTS</a></li>
            <li><a href="#Main Course">MAIN COURSE</a></li>
        </ul>

        <i onClick={handleBarsClick} id="bars" className="fas fa-bars"></i>

        {dropDown &&
            <div id="ddParent" className="dropdownParent" onClick={handleEmptySpaceClick}>
            <div id="ddChild" className="dropdown" >
                <ul>
                    <li className="search">
                        <Search />
                    </li>
                    <li><a href="#Curries">CURRIES</a></li>
                    <li><a href="#Snacks">SNACKS</a></li>
                    <li><a href="#Desserts">DESSERTS</a></li>
                    <li><a href="#Main Course">MAIN COURSE</a></li>
                </ul>

            </div>
            </div> 
        }


    </div>
}
export default Navbar;