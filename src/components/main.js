import React, { Component } from 'react';
import Header from "./header/headersearchbar";
import Body from "./body/body";
import Navigation from "./navigation/navigation";
import Footer from "./footer/footer";
import {BrowserRouter} from "react-router-dom";




export default class Main extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
      
          <Header/>
          <Body/>
          <Navigation />
          <Footer/>
      </div>
      </BrowserRouter>
    )
  }
}
