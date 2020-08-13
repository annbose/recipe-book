import React from "react";
import './home.css';

import Navbar from '../../navbar';
import Section from '../../section';
import Recipe from "../../recipe";
import {Link} from "react-router-dom";

function Home(){

return <div className="home">

            <div className="bg">

              <Link to="/method"><h1 >Cook with love</h1></Link>

            </div>

            <Section
              sectionTitle="Curries">
              < Recipe imgSource="./images/curries.jpg"
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
              </Recipe>
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
