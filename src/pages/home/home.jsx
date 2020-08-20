import React from "react";
import './home.css';
import Section from '../../section';
import RecipeList from "../../recipe";

import curries from "../../itemsData/curriesData.json";
import mainCourse from "../../itemsData/mainCourseData.json";
import snacks from "../../itemsData/snacksData.json";
import desserts from "../../itemsData/dessertsData.json";

function Home() {

    return <div className="home">

        <div className="bg">
            <h1 >Cook with love</h1>
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
