import React, { useState } from 'react';
import { useEntryContext } from '../context/entry/entryState';
import { setFilterValues, resetFilter } from '../context/entry/entryReducer';

import {
  Button,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';
// import {ThemeProvider} from '@material-ui/core/styles';
import { useFilterStyles } from '../styles/muiStyles';
import FilterListIcon from '@material-ui/icons/FilterList';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
// import {themeapp} from '../styles/muiStyles';
// import {customTheme} from '../styles/customTheme';
const Filter = (darkMode) => {
  const [, dispatch] = useEntryContext();
  const [filter, setFilter] = useState({
    videos: false,
    
    blogs:false,
    
    courses:false,
    others: false,
    viewed: false,
    starred: false,
  });
  const classes = useFilterStyles();
  const { videos, blogs,courses, others, viewed, starred } = filter;

  const handleCheckboxChange = (event) => {
    setFilter({ ...filter, [event.target.name]: event.target.checked });
  };

  const handleApplyFilter = (e) => {
    e.preventDefault();
    if (Object.values(filter).every((v) => v === false)) {
      return dispatch(resetFilter());
    }

    dispatch(setFilterValues(filter));
  };

  const handleUncheck = () => {
    setFilter({
      videos: false,
      
      blogs:false,
    
    courses:false,
      others: false,
      viewed: false,
      starred: false,
    });
    dispatch(resetFilter());
  };

  return (
    <form className={classes.root} onSubmit={handleApplyFilter}>
   
      <FormGroup row className={classes.checkboxGroup}>
      <FormControlLabel
          control={
            <Checkbox
            color='primary'
              checked={viewed}
              onChange={handleCheckboxChange}
              name="viewed"
            />
          }
          label="Viewed"
        />
        <FormControlLabel
          control={
            <Checkbox
            color='primary'
              checked={starred}
              onChange={handleCheckboxChange}
              name="starred"
            />
          }
          label="Starred"
        />
        <FormControlLabel 
          control={
            <Checkbox
            color='primary'
              checked={videos}
              onChange={handleCheckboxChange}
              name="videos"
            />

          }
          label="Videos"
        />
        
        <FormControlLabel
          control={
            <Checkbox
            color='primary'
              checked={blogs}
              onChange={handleCheckboxChange}
              name="blogs"
            />
          }
          label="Blogs"
        />
        
        <FormControlLabel
          control={
            <Checkbox
            color='primary'
              checked={courses}
              onChange={handleCheckboxChange}
              name="courses"
            />
          }
          label="Courses"
        />
        <FormControlLabel
          control={
            <Checkbox
            color='primary'
              checked={others}
              onChange={handleCheckboxChange}
              name="others"
            />
          }
          label="Others"
        />
        
        <Button
          onClick={handleUncheck}
          startIcon={<RotateLeftIcon />}
          variant="outlined"
          size="small"
          className={classes.resetBtn}
        >
          Reset
        </Button>
      </FormGroup>
       
      <Button
        type="submit"
        variant="contained"
        color="primary"
        startIcon={<FilterListIcon />}
        className={classes.filterButton}
      >
        Filter Entries
      </Button>
     
    </form>
  );
};

export default Filter;
