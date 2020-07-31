import React from 'react';
import './App.css';

import Navbar from './navbar';
import Section from './section';
import Recipe from "./recipe"


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="bg">
        <h1 >Cook with love</h1>
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
  );
}

export default App;
