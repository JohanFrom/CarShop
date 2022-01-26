import React, { useEffect, useState } from 'react'
import { getCarmodels } from '../api';
import Navbar from './Navbar';
import { Typography } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { deleteCarmodels } from '../api';

function ActivityPanel() {
  const [carmodels, setCarmodels] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetCarmodels = await getCarmodels();
      setCarmodels(fetCarmodels.data)
    };
    fetchData();
  }, [])

  const deleteCar = async () => {
    deleteCarmodels();
    window.location.reload()
  }

  return (
    <div className="App">
    <Navbar />
    <h1>All Cars</h1>
    <Box sx={{display: 'flex', flexDirection: 'column' }}>
    {carmodels.map((carmodel) => (
      <>
        <Typography>Id: {carmodel.id}</Typography>
        <Typography>Name: {carmodel.brand}</Typography>
        <Typography>Model: {carmodel.model}</Typography>
        <Typography>Price: {carmodel.price}</Typography>
        <Box>
        <Button variant='contained' onClick={deleteCar}>Delete</Button>
        </Box>
      </>
    ))}
    </Box>
  </div>
  );
}

export default ActivityPanel;
