import React, { Component } from 'react'
import Navigationbar from "../navigationbar/navigatestart"
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter,Route,Link} from "react-router-dom";
import Home from "../mainbody/home"
import Recent from "../mainbody/recent"
import Previous from "../mainbody/previous"
import Completed from "../mainbody/completed"
import Career from "../mainbody/career"
import  Location from "../mainbody/location"
import Feedback from "../mainbody/feedback"







export default class Navigation extends Component {

  render() {
    return (
      
      <div>
      <div className="container-fluid"> 
         <div className="row">
          
        <div className="col-md-12">
           <Navigationbar />
           </div>
        
        </div>
       </div> 
      

      <div className="container-fluid"> 
         <div className="row">
          <div className="col-md-12"> 
          <Route exact path="/home" component={ Home} />
         <Route path="/recent" component={ Recent}/>
         <Route path="/previous" component={Previous}/>
         <Route path="/completed" component={Completed}/>
         <Route path="/career" component={Career}/>
         <Route path="/location" component={Location}/>
         <Route path="/feedback" component={Feedback}/>
         
            
          </div>
        </div>
       </div>
         </div>
     
      
    )
  }
}
