import React, { useEffect, useState } from 'react'
import { getEmployees, getSession, getOneEmployee} from '../api';
import Navbar from './Navbar'
import { Box,Typography } from '@material-ui/core';


function ShowEmpoyees() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchEmployees = await getEmployees();
      const test = await getSession();
      const ello = await getOneEmployee(123);
      console.log(ello);
      console.log(test);
      setEmployees(fetchEmployees.data)
    };
    fetchData();
  }, [])

  return (
      <div className="App">
        <Navbar />
        
        <h1>All Employees</h1>
        <Box sx={{display: 'flex', flexDirection: 'column' }}>
        {employees.map((employee) => (
          <>
            <Box  sx={{margin: 20}}>
            <Typography>Id: {employee.id}</Typography>
            <Typography>Name: {employee.name}</Typography>
            </Box>
          </>
        ))}
        </Box>
      </div>
  );
}

export default ShowEmpoyees;
