import React, { useEffect, useState } from 'react'
import { getSession, getOneEmployee, getSales, getCarmodels } from '../api';
import Navbar from './Navbar'
import { Box} from '@material-ui/core';


function UserProfile() {
  const [oneEmployee, setOneEmployee] = useState([]);
  const [sales, setSales] = useState([])
  const [carmodels, setCarmodels] = useState([])
  const [userId, setUserid] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const fecthedSession = await getSession();
      const fetchedEmployee = await getOneEmployee(fecthedSession.data.name)
      const fetchedSales = await getSales();
      const fetchedCarModels = await getCarmodels();
      setSales(fetchedSales.data)
      setOneEmployee(fetchedEmployee.data.name)
      setUserid(fetchedEmployee.data.id)
      setCarmodels(fetchedCarModels.data)
      
    };
    fetchData();
  }, [])
  
  let counter = 0;
  let salesList = [];
  let sum = 1
  sales.forEach((sale) => {
    let sale_employee_id = sale.employee_id;
    if(sale_employee_id === userId){
      sum += counter++
    }
    else{
      sum -= 0
    }
    
    carmodels.forEach((car) => {
      let carmodelId = car.id;
      if(sale_employee_id === userId && sale.carmodel_id === carmodelId){
        console.log(car);
        salesList.push(car)
      }
    })

  })

  return (
    <div className="App">
    <Navbar />

    <h1>User Profile</h1>
    <Box sx={{display: 'flex', flexDirection: 'column', fontSize: 20 }}>
    <p>Id: {userId}</p>
    <p>Name: {oneEmployee}</p>
    <p>Sales amount: {sum}</p>
    <h2>List of sales</h2>
    {salesList.map((sale) => (
        <>
          <p>Brand: {sale.brand}</p>
          <p>Model: {sale.model}</p>
          <p>Price: {sale.price}</p>
          <hr />
        </>
    ))}
    </Box>
  </div>
  );
}

export default UserProfile;
