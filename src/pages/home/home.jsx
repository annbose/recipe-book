import React from "react";
import './home.css';
import Section from '../../section';
import RecipeList from "../../recipe";

import curries from "../../itemsData/curriesData.json";
import mainCourse from "../../itemsData/mainCourseData.json";
import snacks from "../../itemsData/snacksData.json";
import desserts from "../../itemsData/dessertsData.json";
import {useLocation} from "react-router-dom";

function Home() {
    const{hash}= useLocation();
    if (hash!==""){
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView();

    }
}

    return <div className="home">

        <div className="bg">
            <div>
            <h1 >Cook with love</h1>
            <h3>and a pinch of laziness</h3>
            </div>
        </div>

        <Section category="curries"
            sectionTitle="Curries">
            <RecipeList recipes={curries} />
        </Section>
        <Section
            sectionTitle="Desserts">
            <RecipeList recipes={desserts} />
        </Section>
        <Section
            sectionTitle="Main Course">
            <RecipeList recipes={mainCourse} />
        </Section>
        <Section
            sectionTitle="Snacks">
            <RecipeList recipes={snacks} />
        </Section>

    </div>
}
export default Home;
