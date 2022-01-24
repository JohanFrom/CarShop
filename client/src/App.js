import React from "react";
import { BrowsweRouter as Router, Route, Switch} from 'react-router-dom'

//Import the the different components

function App() {
  return (
    <Router>
      <Switch>
        
        <Route exact path="/" />
        
      </Switch>
    </Router>
  );
}

export default App;