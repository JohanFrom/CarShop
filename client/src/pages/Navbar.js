import React, { useEffect, useState } from 'react'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { CssBaseline } from '@mui/material';
import { logoutUser, getOneEmployee, getSession } from '../api';;


const Navbar = () => {;
  const [employee, setEmployee] = useState("")
  const [status, setStatus] = useState("")

  
  useEffect(() => {
    const fetchData = async () => {
      const fecthedSession = await getSession();
      const fetchedOneEmployee = await getOneEmployee(fecthedSession.data.name)
      setEmployee(fecthedSession.data)
      setStatus(fetchedOneEmployee.data)
    };
    fetchData();
  }, [])
  

  const UserLogout = () => {
    const answer = window.confirm("Log out?")
    if(answer){
      logoutUser();
      window.location = "/";
    }
  }

  return (
    <React.Fragment>
      <CssBaseline />
        <AppBar
            style={{ background: '#2E3B55' }}
            >
            <Toolbar>
            
            <Typography variant="h4">
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
            <Typography>
              {status.status === false ? null : <IconButton color="inherit" href="/profile">
                Profile
            </IconButton>}
            </Typography>
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
