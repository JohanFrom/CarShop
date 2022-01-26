import React, { useEffect, useState } from 'react'
import { getSession, getOneEmployee, getTotalSales } from '../api';
import Navbar from './Navbar'
import { Box} from '@material-ui/core';


function UserProfile() {
  const [oneEmployee, setOneEmployee] = useState([]);
  const [totalSales, setTotalSales] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const fecthedSession = await getSession();
      const fetchedEmployee = await getOneEmployee(fecthedSession.data.name)
      const fetchedSales = await getTotalSales();
      setTotalSales(fetchedSales.data)
      setOneEmployee(fetchedEmployee.data)
    };
    fetchData();
  }, [])
  
  let patientInfo = []

  totalSales.forEach((sale) => {
    let emptyObject = {}
    let countSales = 0

    let employee_id = oneEmployee.id;
    let sales_employee_id = sale.employee_id;
    
    if(employee_id === sales_employee_id){
      countSales++
      emptyObject.id = employee_id;
      emptyObject.name = oneEmployee.name;
      emptyObject.sales  = countSales;
    }
    else{
      emptyObject.id = employee_id;
      emptyObject.name = oneEmployee.name;
      emptyObject.sales  = 0;
    }
    patientInfo.push(emptyObject)
  })

  return (
    <div className="App">
    <Navbar />
    
    <h1>User Profile</h1>
    <Box sx={{display: 'flex', flexDirection: 'column' }}>
    {patientInfo.map((info) => (
      <>
        <Box  sx={{margin: 10, fontSize: 20}}>
        <p>Id: {info.id}</p>
        <p>Name: {info.name}</p>
        <p>Sales amount: {info.sales}</p>
        </Box>
      </>
    ))}
    </Box>
  </div>
  );
}

export default UserProfile;
