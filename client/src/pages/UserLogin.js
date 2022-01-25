import React from "react";
import { useState } from "react";
import { loginUser } from '../api';
import { Button } from '@material-ui/core'
import { Avatar } from '@mui/material';
import { CssBaseline } from '@mui/material';
import { TextField } from '@mui/material';
import { Typography } from '@mui/material';
import { Container } from '@mui/material';
import { Box } from "@material-ui/core";
import { createTheme, ThemeProvider } from '@mui/material';

function UserLogin() {

  const [loginName, setLoginName] = useState("");

  const handleSubmit = () => {
    console.log(`försöker logga in med ${loginName}`);

    const postData = {
      name: loginName,
    };

    loginUser(postData);
  }

  const theme = createTheme();



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
          <Typography sx={{ fontSize: 35}}>Car Shop</Typography>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form">
            <TextField
              margin="normal"
              fullWidth
              type="text"
              label="Name..."
              onChange={(e) => setLoginName(e.target.value)}
            />
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
              >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default UserLogin;
