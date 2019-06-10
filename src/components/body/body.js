import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Logo from "./src/logo.png"

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    

  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
});

function AutoGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs>
          <Paper className={classes.paper}>Company profile</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>

             
              <img className={classes.img} alt="logo" src={ Logo } />
            

          </Paper>
        </Grid>
        <Grid item xs>

          <Paper className={classes.paper}>other projects</Paper>
        </Grid>
      </Grid>
     
      
    </div>
  );
}

AutoGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AutoGrid);
