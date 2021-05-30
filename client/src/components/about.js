import React from 'react';


import {
  
  Typography,
  Paper
} from '@material-ui/core/';
import { useRegisterLoginForm } from '../styles/muiStyles';
// import {customTheme} from '../styles/customTheme';
const About = (darkMode) => {


  const classes = useRegisterLoginForm();
  

  return (
    <Paper className={classes.root}>
    <form className={classes.form}>
     
       <Typography variant="h4" color="primary" className={classes.formTitle}>
         WELCOME TO LINKSDRIVE
        </Typography>

        <br/>
        
        <Typography variant="h6" color="primary" className={classes.formTitle}>
        [ Coming soon ]
        </Typography>
  
       
      </form>
    </Paper>
  );
};

export default About;
