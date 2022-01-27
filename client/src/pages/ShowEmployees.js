import React, { useEffect, useState } from 'react'
import { getEmployees } from '../api';
import Navbar from './Navbar'
import { Box } from '@material-ui/core';


function ShowEmployees() {
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
        {employees.map((employee) => (
          <>
            <Box  sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: 5, fontSize: 20}}>
            <p>Id: {employee.id}</p>
            <p>Name: {employee.name}</p>
            </Box>
          </>
        ))}
      </div>
  );
}

export default ShowEmployees;
