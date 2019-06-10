import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {BrowserRouter,Route,Link} from "react-router-dom"
import Chief from "../oppurtunity/chief"
import Officeboy from "../oppurtunity/officeboy"

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <BrowserRouter>
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>IT IS CAREER OPPERTUNITY</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}><Link to="/Chief">CHIEF ENGINEER</Link></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}><Link to="/Officeboy">OFFICE BOY</Link></Paper>
        </Grid>
        <Grid item xs={12}>
          <Route path="/Chief" component={Chief}/>
          <Route path="/Officeboy" component={Officeboy}/>
        </Grid>
      </Grid>
    </div>
    </BrowserRouter>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);
