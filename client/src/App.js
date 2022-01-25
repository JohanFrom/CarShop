import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import UserLogin from './pages/UserLogin';
import ActivityPanel from './pages/ActivityPanel';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<UserLogin />}/>
          <Route path="/activitypanel" element={<ActivityPanel />}/>
        </Routes>
    </Router>
  );
}

export default App;
