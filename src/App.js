import logo from './logo.svg';
import React from "react";
import './App.css';

import Header from "./commonents/Header";
import Navbar from "./commonents/Navbar";
import Profile from "./commonents/Profile";

const App = () => {
    return (
        <div className='wrapper'>
        <div className="container">
          <Header/>
            <Navbar/>
           <Profile/>

        </div>
        </div>
    );
}

export default App;
