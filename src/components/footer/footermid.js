import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginTop:"10px",
    backgroundColor:"#5c6bc0",
    color:"white",
    height:"180px"
  },
  anchor:{
   
    marginTop:"10px",
    color: theme.palette.text.secondary,
    backgroundColor:"#5c6bc0",
      textDecoration:"none",
      color:"white",
      textAlign:"left",
      paddingLeft:"15px"
  },

  
 
});



function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
    <Grid container spacing={0}>
      <Grid item xs={2}>
        <Paper className={classes.paper}>
        CONTACT US AT
        <br/>
        <br/>
           
            <i className="fa fa-facebook"></i>
             <a href="http://www.facebook.com/allhappylove" target="_blank" className={classes.anchor}>Facebook</a>
          <br/>
          <i className="fa fa-twitter"></i>
          <a href="http://www.facebook.com/allhappylove" target="_blank" className={classes.anchor}>____twitter</a>
          <br/>
          <i className="fa fa-instagram"></i>
          <a href="http://www.facebook.com/allhappylove" target="_blank" className={classes.anchor}>instagram</a>
          <br/>
          <i className="fa fa-Gmail"></i>
          <a href="mailto:waqas.saeed007@gmail.com" target="_blank" className={classes.anchor}>______gmail</a>
         
         
        </Paper>
      </Grid>
      <Grid item xs={8}>
        <Paper className={classes.paper}>
        <h1> ADDRESS</h1>
        <h4>house # 200c baharemadian lane jhang road faisalabad</h4>
        </Paper>
      </Grid>
      <Grid item xs={2}>
        <Paper className={classes.paper}>
          CONTACT US AT 
          <br/>
          <br/>
          <i className="fa fa-phone"></i>
               +92-308-6622438

               <br/>
               <i className="fa-office"></i>
               +92-41-0000000
        </Paper>
      </Grid>
      
    </Grid>
  </div>











  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);
