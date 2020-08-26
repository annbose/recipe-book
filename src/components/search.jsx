import React, { useState } from "react";
import "./search.css";

import curries from "../itemsData/curriesData.json";
import mainCourse from "../itemsData/mainCourseData.json";
import snacks from "../itemsData/snacksData.json";
import desserts from "../itemsData/dessertsData.json";

function Search() {

    const [searchDropDown, setSearchDropDown] = useState(false);
    const [searchList, setSearchList] = useState([]);

    function handleChange(event) {
        if (event.target.value.toLowerCase() === "") {
            setSearchDropDown(false);
            return
        }
        setSearchDropDown(true);
        const e = (event.target.value).toLowerCase();
        console.log(e);
        let matched = [];
        const allRecipes = [curries, mainCourse, snacks, desserts];

        for (let j = 0; j < 4; j++) {
            // console.log(allRecipes[j])
            for (let i = 0; i < allRecipes[j].length; i++) {
                // console.log(allRecipes[j][i].recipeName)
                if (allRecipes[j][i].recipeName.toLowerCase().startsWith(e)) {
                    // console.log("got ", allRecipes[j][i].recipeName)
                    matched.push(allRecipes[j][i].recipeName)
                }
            }
        }
        setSearchList(matched)
        // const curryFiltered = curries.filter((curry,index) => {
        //    return (curry.recipeName.toLowerCase().charAt(0)===e)
        //    console.log(index)
        //    });
        //    console.log(curryFiltered);

        // setSearchList((prevValues)=>{
        //      return [...prevValues,curryFiltered]

        //  setSearchList(function x(){
        //      [curryFiltered]
        //  })
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
                {searchList.map((item, index) => {
                    return <ol>
                     <div className="searchList"><li key={index}>{item}</li></div> 
                     </ol>

                })
                }
                {/* <div className="testing">BLA</div> */}
            </div>
        }
    </div>
}
export default Search;