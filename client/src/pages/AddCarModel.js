import React from "react";
import { useState } from "react";
import { Button } from '@material-ui/core'
import { CssBaseline } from '@mui/material';
import { TextField } from '@mui/material';
import { Typography } from '@mui/material';
import { Container } from '@mui/material';
import { Box } from "@material-ui/core";
import { createTheme, ThemeProvider } from '@mui/material';
import Navbar from './Navbar'
import { postCarmodels } from "../api";

function UserLogin() {
  
  const theme = createTheme();
  const [newbrand, setnewBrand] = useState("");
  const [newmodel, setnewModel] = useState("");
  const [newprice, setnewPrice] = useState("");

  const handleSubmit = () => {
    console.log(`${newbrand}`);
    console.log(`${newmodel}`);
    console.log(`${newprice}`);

    const postData = {
      brand: newbrand,
      model: newmodel,
      price: newprice
    }

    postCarmodels(postData)
    //window.location = "/cars"
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Navbar />
        <CssBaseline />
        <Box
          sx={{
            marginTop: 150,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          
          <Typography component="h1" variant="h5">
            Add a car!
          </Typography>
          <Box component="form">
            <TextField
              margin="normal"
              fullWidth
              type="text"
              label="Brand..."
              onChange={(e) => setnewBrand(e.target.value)}
              required
            />
            <TextField
              margin="normal"
              fullWidth
              type="text"
              label="Model..."
              onChange={(e) => setnewModel(e.target.value)}
              required
            />
            <TextField
              margin="normal"
              fullWidth
              type="text"
              label="Price..."
              onChange={(e) => setnewPrice(e.target.value)}
              required
            />
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
              >
              Add
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default UserLogin;
