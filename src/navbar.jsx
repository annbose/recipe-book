import React from "react";
import "./navbar.css";

function Navbar(){

    function handleChange(event){
        console.log(event.target.value)
    }

    function handleSearchClick(){
        console.log("i gt clicked")

    }


    return <div className="navbar-parent">
        <span className="nav-title">Ann's Recipes</span>
        
        <input className="nav-input"
        onChange={handleChange} ></input>

        <i className="nav-i"
        onClick={handleSearchClick}class="fas fa-search"></i>
        

        <span className="nav-cat">Categories</span>
        <i class="fas fa-caret-down"></i>


    </div>
}
export default Navbar;