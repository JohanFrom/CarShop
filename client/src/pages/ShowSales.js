import React, { useEffect, useState } from 'react'
import { getTotalSales, getCarmodels } from '../api';
import Navbar from './Navbar'
import { Box } from '@material-ui/core';

function ShowEmpoyees() {
  const [sales, setSales] = useState([])
  const [carmodels, setCarmodels] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const fetchedSales = await getTotalSales();
      const fecthedCarmodels = await getCarmodels();
      setSales(fetchedSales.data)
      setCarmodels(fecthedCarmodels.data)
    };
    fetchData();
  }, [])

  let employeeAndPriceList = []
  
  sales.forEach((sale) => {
    let emptyObject = {}
    let salesArray = sale.sales;
    let employeeId = sale.id;
    let sum = 0;
    for (let i = 0; i < salesArray.length; i++) {
      console.log(employeeId);
      let employeeName = sale.name
      const salesData = salesArray[i];
      const sales_employee_id = salesData.employee_id;
      let sales_carmodel_id = salesData.carmodel_id;
      
      carmodels.forEach((carmodel) => {
        
        let carmodelId = carmodel.id;
        let price = carmodel.price;
        
        if(sales_employee_id === employeeId && sales_carmodel_id === carmodelId){   
          if(employeeAndPriceList.length === 0){
            sum += price
            emptyObject.id = sales_employee_id;
            emptyObject.name = employeeName;
            emptyObject.price = sum;  
            employeeAndPriceList.push(emptyObject)
          }
          else{
            sum += price;
            emptyObject.price = sum;  
          }
         
        }
      })
      
    }
  })

  return (
      <div className="App">
        <Navbar />
        
        <h1>All Sales</h1>
        <Box sx={{display: 'flex', flexDirection: 'column' }}>
        {employeeAndPriceList.map((info) => (
        <>
          <Box  sx={{margin: 10, fontSize: 20}}>
          <p>Id: {info.id}</p>
          <p>Name: {info.name}</p>
          <p>Sales amount earned: {info.price}</p>
          </Box>
          
        </>
    ))}
        </Box>
      </div>
  );
}

export default ShowEmpoyees;
