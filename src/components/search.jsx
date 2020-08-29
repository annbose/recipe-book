import React, { useState } from "react";
import "./search.css";

import curries from "../itemsData/curriesData.json";
import mainCourse from "../itemsData/mainCourseData.json";
import snacks from "../itemsData/snacksData.json";
import desserts from "../itemsData/dessertsData.json";
import { Link } from "react-router-dom";

function Search(props) {

    const [searchDropDown, setSearchDropDown] = useState(false);
    const [searchList, setSearchList] = useState([]);

    function handleChange(event) {
        const e = (event.target.value).toLowerCase();

        if (e === "") {
            setSearchDropDown(false);
            return
        }
        setSearchDropDown(true);
        

        let matched = [];
        const allRecipes = [curries, mainCourse, snacks, desserts];
        

        for (let j = 0; j < 4; j++) {
           
            for (let i = 0; i < allRecipes[j].length; i++) {
                
                if (allRecipes[j][i].recipeName.toLowerCase().startsWith(e)) {
                    // console.log("got ", allRecipes[j][i].recipeName)
                    matched.push(allRecipes[j][i]);

                }
            }
        }
        setSearchList(matched)

    }

    function handleSearchClick() {
        setSearchDropDown(false)
        console.log("i gt clicked")
    }
    

    return <div className="searchParent">
             <input onChange={handleChange} ></input>
                 {/* <div className="icon"> */}
             <i onClick={handleSearchClick} className="fas fa-search"></i>


              {searchDropDown &&
                 <div className="searchDropDown">
                        <ul>
                        {searchList.map((item, index) => {
                            return <li className="searchList"
                                key={index}>
                                  <Link to={"/method/" + item.category + "/" + item.id} onClick={props.onClicked}  >
                                     {item.recipeName}
                                 </Link>
                          </li>

                          })}
                     </ul>
                 </div>
          }
    </div>
}
export default Search;