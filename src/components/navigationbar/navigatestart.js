import React from 'react';
import PropTypes, { any } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Icon from '@material-ui/core/Icon';
import RestoreIcon from '@material-ui/icons/Restore';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {Link} from "react-router-dom";

const styles = {
  root: {
    width:"100%" ,
    color:"white",
    borderTop:"1px solid brown",
    borderBottom:"1px solid brown",
    textAlign:"center",
    marginTop:"5px"
   
    
  },
};

class LabelBottomNavigation extends React.Component {
  state = {
    // value: 'recents',
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
     
      
      
      <BottomNavigation value={value} onChange={this.handleChange} className={classes.root}>
      <BottomNavigationAction label="home" value="home" icon={<Icon><Link to="/home">home</Link></Icon>} />
        <BottomNavigationAction label="Recents" value="recents" icon={<Link to="/recent"><RestoreIcon /></Link>} />
        <BottomNavigationAction label="previous-projects" value="previous-projects" icon={<Icon><Link to="/previous">keyboard_backspace</Link></Icon> } />
        <BottomNavigationAction label="completed-projects" value="completed-projects" icon={<Icon><Link to="/completed">check_circle</Link></Icon>} />
        <BottomNavigationAction label="career" value="career" icon={<Icon><Link to="/career">sentiment_satisfied_alt</Link></Icon>} />
        <BottomNavigationAction label="location" value="location" icon={<Link to="/location"><LocationOnIcon /></Link>} />
        <BottomNavigationAction label="feedback" value="feedback" icon={<Icon><Link to="/feedback">textsms</Link></Icon>} />
       </BottomNavigation>
     

       
       
    );
  }
}

LabelBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LabelBottomNavigation);
