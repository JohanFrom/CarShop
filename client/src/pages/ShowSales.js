import React, { useEffect, useState } from 'react'
import { getCarmodels, getEmployees, getTotalSales } from '../api';
import Navbar from './Navbar'
import { Box, Typography } from '@material-ui/core';

function ShowEmpoyees() {
  const [employees, setEmployees] = useState([]);
  const [sales, setSales] = useState([])
  const [cars, setCars] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const fetchEmployees = await getEmployees();
      const fetchSales = await getTotalSales();
      const fetchCars = await getCarmodels();
      setEmployees(fetchEmployees.data)
      setSales(fetchSales.data)
      setCars(fetchCars.data)
    };
    fetchData();
  }, [])

  let salesList = []
  let emptyObejct = {}

  sales.forEach((sale) => {
      let employeeId = sale.employee_id;
  })



  return (
      <div className="App">
        <Navbar />
        
        <h1>All Sales</h1>
        <Box sx={{display: 'flex', flexDirection: 'column' }}>
        {salesList.map((sale) => (
          <>
            <Typography>Accumelated sales: {sale.accSales}</Typography>
            
          </>
        ))}
        </Box>
      </div>
  );
}

export default ShowEmpoyees;
