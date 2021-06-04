import React from "react";
import './App.css';
import Home from "./pages";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import SiginPage from "./pages/sigin";

function App() {
  return (
    <div className="App">
    <Router>
      
       <Switch>

          <Route path="/" component={Home} exact />
          <Route path="/signin" component={SiginPage} exact />
          
       </Switch>
    </Router>
    </div>
  );
}

export default App;
