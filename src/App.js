import React from "react";
import Login from './tabs/login';
import First from "./tabs/first";
import { Route, BrowserRouter, Switch } from "react-router-dom";

function App() {
  return (
    <div>
     
     <BrowserRouter>
          <Switch>
            <Route exact path="/"><Login /></Route>
            <Route path="/first"><First/></Route> 
            
            
          </Switch>
        </BrowserRouter>
     
     
    </div>
  );
}

export default App;
