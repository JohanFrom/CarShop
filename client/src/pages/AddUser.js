import React from "react";
import { useState } from "react";
import { Button } from '@material-ui/core'
import { CssBaseline } from '@mui/material';
import { TextField } from '@mui/material';
import { Typography } from '@mui/material';
import { Container } from '@mui/material';
import { Box } from "@material-ui/core";
import { createTheme, ThemeProvider } from '@mui/material';
import { MenuItem } from "@material-ui/core";
import { Select } from "@material-ui/core";
import { InputLabel } from "@material-ui/core";
import { FormControl } from "@material-ui/core";
import { postNewUser } from "../api";

function AddUser() {
    
  const theme = createTheme();
  
  const [newName, setNewName] = useState("");
  const [dropValues, setDropValues] = useState("")

  
  console.log(dropValues);

  const handleSubmit = () => {
    
    const postData = {
        name: newName,
        //status: dropValues
    }

    postNewUser(postData)
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 150,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            border: "1px solid black",
            borderRadius: 8,
            paddingBottom: 20
          }}
        >
          <Typography component="h1" variant="h5">
            Create new User
          </Typography>
          <Box sx={{
              margin: 20
          }} component="form">
            <TextField
              margin="normal"
              fullWidth
              type="text"
              onChange={(e) => setNewName(e.target.value)}
            />
            <FormControl fullWidth >
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Worker"
                onChange={(e) => setDropValues(e.selected.value)}
            >
                <MenuItem value={1}>Worker</MenuItem>
                <MenuItem value={1}>Not Worker</MenuItem>
            </Select>
            </FormControl>
            <Box sx={{ marginTop: 20}}>
                <Button 
                fullWidth
                variant="contained"
                onClick={handleSubmit}
                >
                Create profile
                </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default AddUser;
