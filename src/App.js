import logo from './logo.svg';
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";
import Friends from "./components/friends/Friends";
import {onChangePostInputValue} from "./redux/state";
import DialogsContainer from "./components/dialogs/DialogsContainer";


const App = (props) => {

    return (

            <div className='wrapper'>
                <div className="container">
                    <Header/>
                    <Navbar/>
                    <div className="content">
                        <Routes>
                            <Route path='/profile' element={<Profile />}/>
                            <Route path='/dialogs' element={<DialogsContainer />}/>
                            <Route path='/friends' element={<Friends />}/>
                        </Routes>
                    </div>
                </div>
            </div>

    );
}

export default App;
