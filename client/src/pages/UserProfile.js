import React, { useEffect, useState } from 'react'
import { getSession, getOneEmployee, getSales } from '../api';
import Navbar from './Navbar'
import { Box} from '@material-ui/core';


function UserProfile() {
  const [oneEmployee, setOneEmployee] = useState([]);
  const [sales, setSales] = useState([])
  const [userId, setUserid] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const fecthedSession = await getSession();
      const fetchedEmployee = await getOneEmployee(fecthedSession.data.name)
      const fetchedSales = await getSales();
      setSales(fetchedSales.data)
      setOneEmployee(fetchedEmployee.data)
      setUserid(fetchedEmployee.data.id)
    };
    fetchData();
  }, [])
  
  let counter = 0;
  sales.forEach((sale) => {
    let sale_employee_id = sale.employee_id;
    if(sale_employee_id === userId){
      counter++
    }
    else{
      counter = 0;
    }
  })

  return (
    <div className="App">
    <Navbar />

    <h1>User Profile</h1>
    <Box sx={{display: 'flex', flexDirection: 'column' }}>
    <p>Id: {userId}</p>
    <p>Name: {oneEmployee.name}</p>
    <p>Email: {oneEmployee.email}</p>
    <p>Password: {oneEmployee.password}</p>
    <p>Sales amount: {counter}</p>
    </Box>
  </div>
  );
}

export default UserProfile;
