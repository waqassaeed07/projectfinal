
import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';
import {adddata} from "../../redux/action/action"




 class Chief extends Component {
  constructor(props){
    super(props);
    this.state={
      
      title:"job for chief engineer",
      firstname:"",
      lastname:"",
      phonenumber:"",
      email:"",
      address1:"",
      address2:"",
      city:"",
      state:"",
      zip:"",
      country:"",
      checked:"",
    }
     
  }
  submitbtn=()=>{
    alert("your data is submitted");
    
    this.props.adddata(this.state);
  }
  

  render() {

    console.log("state",this.state)
    return (
      <div >
       <Typography variant="h6" gutterBottom>
        Job for chief engineer
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="fname"
            
            onChange={(e)=>this.setState({firstname:e.target.value})}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="lname"
            onChange={(e)=>this.setState({lastname:e.target.value})}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="phone number"
            name="phon enumber"
            label="Phone number"
            fullWidth
            autoComplete="phonenumber"
            
            onChange={(e)=>this.setState({phonenumber:e.target.value})}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="email"
            name="email"
            label="Email"
            fullWidth
            autoComplete="email"
            
            onChange={(e)=>this.setState({email:e.target.value})}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="billing address-line1"
            onChange={(e)=>this.setState({address1:e.target.value})}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="billing address-line2"
            onChange={(e)=>this.setState({address2:e.target.value})}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="billing address-level2"
            onChange={(e)=>this.setState({city:e.target.value})}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="state" name="state" 
          onChange={(e)=>this.setState({state:e.target.value})} label="State/Province/Region" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="billing postal-code"
            onChange={(e)=>this.setState({zip:e.target.value})}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="billing country"
            onChange={(e)=>this.setState({country:e.target.value})}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="check if your all information correct"
            onChange={(e)=>this.setState({checked:e.target.value})}
          />
          <Button onClick={this.submitbtn} className="button" variant="contained" color="primary" >
        SUBMIT
      </Button>
        </Grid>
        
      </Grid>

        
      </div>
    )
  }
}


export default connect(null,{adddata})(Chief)





















