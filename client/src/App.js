import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import UserLogin from "./pages/UserLogin.js";
import ActivityPanel from "./pages/ActivityPanel";

//Import the the different components

function App() {
  return (
    <Router>
    
        
        <Route exact path="/" component={UserLogin}/>
        <Route exact path="acitivitypanel" component={ActivityPanel}/>
      
    </Router>
  );
}

export default App;