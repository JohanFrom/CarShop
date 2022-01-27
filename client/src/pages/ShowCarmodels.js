import React, { useEffect, useState } from 'react'
import { getCarmodels } from '../api';
import Navbar from './Navbar';
import { Typography } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { deleteCarmodels } from '../api';

function ShowCarmodels() {
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
    {carmodels.map((carmodel) => (
      <>
      <Box sx={{ padding: 10 }} >
        <Typography>Id: {carmodel.id}</Typography>
        <Typography>Name: {carmodel.brand}</Typography>
        <Typography>Model: {carmodel.model}</Typography>
        <Typography>Price: {carmodel.price}</Typography>
        <Button variant='contained' onClick={deleteCar}>Delete</Button>
      </Box>
      </>
    ))}
  </div>
  );
}

export default ShowCarmodels;
