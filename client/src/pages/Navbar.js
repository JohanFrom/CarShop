import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import green from "@material-ui/core/colors/green";
import { CssBaseline } from '@mui/material';
import { logoutUser } from '../api';

const UserLogout = () => {
  logoutUser();
  window.location = "/";
}

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(-120)
  },
  title: {
    flexGrow: 1
  },
  customColor: {
    // or hex code, this is normal CSS background-color
    backgroundColor: green[500]
  },
  customHeight: {
    minHeight: 200
  },
  offset: theme.mixins.toolbar
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
        <AppBar
            style={{ background: '#2E3B55' }}
            >
            <Toolbar>
            
            <Typography variant="h6" className={classes.title}>
                CarShop
            </Typography>
            <IconButton color="inherit" href="/employees">
                Employees
            </IconButton>
            <IconButton color="inherit" href="/sales">
                Sales
            </IconButton>
            <IconButton color="inherit" href="/cars">
                Cars
            </IconButton>
            <IconButton color="inherit" href="/add">
                Add
            </IconButton>
            <IconButton color="inherit" onClick={UserLogout}>
                Logout
            </IconButton>
            </Toolbar>
        </AppBar>
        <Toolbar />
        
        
    </React.Fragment>
  );
}

export default Navbar;
