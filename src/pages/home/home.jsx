import React from "react";
import './home.css';
import Section from '../../section';
import Recipe from "../../recipe";
import curries from "../../curriesData.json";

function Home() {

    return <div className="home">

        <div className="bg">

            <h1 >Cook with love</h1>

        </div>

        <Section
            sectionTitle="Curries">

            {curries.map((curryItem, index) => {
                return <Recipe
                    key={index}
                    id={index}
                    imgSource={curryItem.imgSource}
                    recipeName={curryItem.recipeName}
                    cookingTime={curryItem.cookingTime}
                />
            })}

            {/* < Recipe imgSource="./images/curries.jpg"
                recipeName="Beef Curry"
                cookingTime="45 min" >
              </Recipe>
              <Recipe
                imgSource="./images/curries.jpg"
                recipeName="Eggplant Curry"
                cookingTime="30 min">
              </Recipe>
              <Recipe
                imgSource="./images/curries.jpg"
                recipeName="Eggplant Curry"
                cookingTime="30 min">
              </Recipe>
              <Recipe
                imgSource="./images/curries.jpg"
                recipeName="Eggplant Curry"
                cookingTime="30 min">
              </Recipe> */}
        </Section>

        <Section
            sectionTitle="Desserts">
            < Recipe imgSource="./images/desserts.jpg"
                recipeName="Chocolate Cake"
                cookingTime="45 min" >
            </Recipe>
            <Recipe
                imgSource="./images/desserts.jpg"
                recipeName="Ada Payasam"
                cookingTime="60 min">
            </Recipe>
        </Section>
    </div>
}
export default Home;
