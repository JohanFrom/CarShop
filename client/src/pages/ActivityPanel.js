import React, { useEffect, useState } from 'react'
import { getEmployees } from '../api';

function ActivityPanel() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchEmployees = getEmployees();
      setEmployees(fetchEmployees)
    };
    fetchData();
  })

  console.log(employees);


  return (
    <div className="App">
      <h1>ActivityPanel</h1>


    </div>
  );
}

export default ActivityPanel;
