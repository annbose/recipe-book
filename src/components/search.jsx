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
    const [noresults,setNoresults]=useState(false);

    function handleChange(event) {
        const e = (event.target.value).toLowerCase();

        if (e === "") {
            setSearchDropDown(false);
            setNoresults(false)
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
        // setSearchList(matched)
        if ( matched.length === 0 ){
            setNoresults(true)
             setSearchDropDown(false)
            }
        
        else {setSearchList(matched)
        }
    }

    function handleSearchListDDClick() {
        setSearchDropDown(false)
        props.onClick()
        // if (props.onClicked){
        //     props.onClicked()
        // }this can be used where props is needed  only at particular cases(in a same component).
    }

    return <div className="searchParent">
        <input placeholder="Type to Search.." onChange={handleChange} ></input>
            {/* <i onClick={handleSearchClick} className="fas fa-search"></i> */}

        {searchDropDown &&
            <div className="searchDropDown">
                <ul>
                    {searchList.map((item, index) => {
                        return <li className="searchList"
                            key={index}>
                            <Link to={"/method/" + item.category + "/" + item.id} onClick={handleSearchListDDClick}  >
                                {item.recipeName}
                            </Link>
                        </li>

                    })}
                </ul>
            </div>
        }
        {noresults && 
            <div className="noresults">No Results
            </div>

        }
    </div>
}
export default Search;