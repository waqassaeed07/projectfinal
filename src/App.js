import React from 'react';

import './App.css';
import Main from "./components/main"
import { Provider } from "react-redux";
import store from "./redux/store/store";


function App() {
  return (
    <Provider store={store}>
    <div className="App">
    <Main/>

     
    </div>
    </Provider>
  );
}

export default App;
