
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import './App.css';

import Navbar from "./components/navbar/Navbar";
import Friends from "./components/friends/Friends";

import ProfileContainer from "./components/profile/ProfileContainer";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import UsersContainer from "./components/users/UsersContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import Login from "./components/login/Login";






const App = (props) => {

    return (
            <div className='wrapper'>
                <div className="container">
                    <HeaderContainer/>
                    <Navbar/>
                    <div className="content">
                        <Routes>
                            <Route path='/profile/:userID?' element={<ProfileContainer />}/>
                            <Route path='/dialogs' element={<DialogsContainer />}/>
                            <Route path='/users' element={<UsersContainer/>}/>
                            <Route path='/friends' element={<Friends/>}/>
                            <Route path='/login' element={<Login/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
    );
}

export default App;
