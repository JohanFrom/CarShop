import React, { useEffect, useState } from 'react'
import { getTotalSales } from '../api';
import Navbar from './Navbar'
import { Box } from '@material-ui/core';

function ShowEmpoyees() {
  const [sales, setSales] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const fetchedSales = await getTotalSales();
      setSales(fetchedSales.data)
    };
    fetchData();
  }, [])


  console.log(sales);

  return (
      <div className="App">
        <Navbar />
        
        <h1>All Sales</h1>
        <Box sx={{display: 'flex', flexDirection: 'column' }}>
        
        </Box>
      </div>
  );
}

export default ShowEmpoyees;
