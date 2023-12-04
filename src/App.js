import React from "react";
import {Route, Routes} from "react-router-dom";

import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Friends from "./components/friends/Friends";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import ProfileContainter from "./components/profile/ProfileContainter";
import Users from "./components/users/Users";
import Login from "./components/login/Login";


class App extends React.Component {
    render() {

        return (

            <div className='wrapper'>
                <div className="container">
                    <Header/>
                    <Navbar/>
                    <div className="content">
                        <Routes>

                            <Route path='/profile/:userID?' element={<ProfileContainter/>}/>
                            <Route path='/dialogs' element={<DialogsContainer/>}/>
                            <Route path="/users" element={<Users/>}/>
                            <Route path='/friends' element={<Friends/>}/>
                            <Route path='login' element={<Login/>}/>
                        </Routes>
                    </div>
                </div>
            </div>

        );
    }
}

export default App;
