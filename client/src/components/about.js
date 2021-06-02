import React from 'react';


import {
  
  Typography,
  Paper
} from '@material-ui/core/';
import { useabout } from '../styles/muiStyles';
// import {customTheme} from '../styles/customTheme';
const About = (darkMode) => {

  
  const classes = useabout();
  
 

  return (
    <Paper className={classes.root}>
    <form className={classes.form}>
     
       <Typography variant="h4" color="primary" className={classes.formTitle}>
         WELCOME TO LINKSDRIVE
        </Typography>

        <br/>
        
        <Typography variant="h6" color="primary" className={classes.formele} >
        LinksDrive is a powerful and easy to use web app 
        for seamlessly organizing the daily tasks of a user. 
         

  It is a drive with a private
repository for each user where they can add the links using 
a tagging system with some features
and a search engine that makes sorting of the desired data easier. 
      You know! Smart Idea always comes to well planners. 
       
      Explore in new support world! It’s now faster & quicker. 
     Taking a step towards operating with maximum efficiency 
     tomorrow by using LinksDrive today!

        </Typography>
  
       
      </form>
    </Paper>
  );
};

export default About;
