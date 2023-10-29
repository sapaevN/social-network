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


const App = (props) => {
    return (

            <div className='wrapper'>
                <div className="container">
                    <Header/>
                    <Navbar/>
                    <div className="content">
                        <Routes>
                            <Route path='/profile' element={
                                <Profile
                                    profilePage={props.state.profilePage}
                                    dispatch={props.dispatch}
                                    postInputValue={props.state.profilePage.postInputValue}
                                />}
                            />
                            <Route path='/dialogs' element={
                                <Dialogs
                                    dialogsPage={props.state.dialogsPage}
                                    dispatch={props.dispatch}
                                    newInputValue={props.state.dialogsPage.newInputValue}
                                />}
                            />
                            <Route path='/friends' element={
                                <Friends friendsPage={props.state.friendsPage}/>}
                            />
                        </Routes>
                    </div>
                </div>
            </div>

    );
}

export default App;
