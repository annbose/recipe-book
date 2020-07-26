import React from 'react';
import './App.css';
import Carousel from "./carousel.jsx"

function App() {
  return (
    <div className="App">
     <Carousel 
     imageSource="./images/curries.jpg"
      section="Curries"/>
    </div>
  );
}

export default App;
