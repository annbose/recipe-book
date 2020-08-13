import React from 'react';
import "./App.css"
import {Switch,Route} from "react-router-dom";
import Home from "./pages/home/home";
import Method from "./pages/method/method";
import Layout from "./pages/pagelayout";


function App() {
  return (
    
      <Switch>

        <Route path="/method">
          <Layout>
            <Method />
          </Layout>
        </Route>

        <Route path="/">
          <Layout>
            <Home />
          </Layout>
        </Route>
        
      </Switch >

  );
}

export default App;
