import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import UserLogin from './pages/UserLogin';
import ShowCarmodels from './pages/ShowCarmodels';
import AddCarModel from './pages/AddCarModel'
import ShowEmpoyees from './pages/ShowEmployees';
import ShowSales from './pages/ShowSales'
import AddUser from './pages/AddUser'

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<UserLogin />}/>
          <Route path="/adduser" element={<AddUser />}/>
          <Route path="/employees" element={<ShowEmpoyees />}/>
          <Route path="/sales" element={<ShowSales />}/>
          <Route path="/cars" element={<ShowCarmodels />}/>
          <Route path="/add" element={<AddCarModel />}/>
        </Routes>
    </Router>
  );
}

export default App;
