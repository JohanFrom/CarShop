import React, { useEffect, useState } from 'react'
import { getEmployees, logoutUser } from '../api';
import Navbar from './Navbar'
import { Box, createTheme, ThemeProvider, Typography } from '@material-ui/core';
import { flexbox } from '@mui/system';

const headerTheme = createTheme({
  typography: {
    fontSize: 30
  }
})

const pTheme = createTheme({
  typography: {
    fontSize: 50
  }
})


function ShowEmpoyees() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchEmployees = await getEmployees();
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
            <Typography>Id: {employee.id}</Typography>
            <Typography>Name: {employee.name}</Typography>
          </>
        ))}
        </Box>
      </div>
  );
}

export default ShowEmpoyees;
