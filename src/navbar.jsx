import React, { useState } from "react";
import "./navbar.css";
import Search from "./components/search";
import { Link } from "react-router-dom";

function Navbar() {

    const [dropDown, setdropDown] = useState(false);



    function handleBarsClick(event) {

        setdropDown(function (prevValue) { return !prevValue })

    }

    function handleEmptySpaceClick(event) {
        if (event.target.id === "ddParent" || event.target.id === "bars") {
            setdropDown(function (prevValue) { return !prevValue })
        }
    }

    function disableDropDown() {
        setdropDown(false)
    }

    return <nav className="navParent">

        <Link to="/"><h1 className="logo">Ann's Recipes</h1></Link>

        <ul className="navItems">
            <li>
                <Search onClick={disableDropDown}/>
            </li>
            <li><Link to="/#Curries">CURRIES</Link></li>
            <li><Link to="/#Snacks">SNACKS</Link></li>
            <li><Link to="/#Desserts">DESSERTS</Link></li>
            <li><Link to="/#Main Course">MAIN COURSE</Link></li>
        </ul>

        <i onClick={handleBarsClick} id="bars" className="fas fa-bars"></i>

        {dropDown &&
            <div id="ddParent" className="dropdownParent" onClick={handleEmptySpaceClick}>
                <div id="ddChild" className="dropdown" >
                    <ul>
                        <li className="search">
                            <Search onClick={disableDropDown} />
                        </li>
                        <li className="navlink"><Link onClick={() => { setdropDown(false) }} to="/#Curries">CURRIES</Link></li>
                        <li className="navlink"><Link onClick={() => { setdropDown(false) }} to="/#Snacks">SNACKS</Link></li>
                        <li className="navlink"><Link onClick={() => { setdropDown(false) }} to="/#Desserts">DESSERTS</Link></li>
                        <li className="navlink"><Link onClick={() => { setdropDown(false) }} to="/#Main Course">MAIN COURSE</Link></li>
                    </ul>

                </div>
            </div>
        }


    </nav>
}
export default Navbar;