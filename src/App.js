
import React from "react";
import { Route, Routes} from "react-router-dom";

import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Friends from "./components/friends/Friends";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import ProfileContainter from "./components/profile/ProfileContainter";
import Users from "./components/users/UsersContainer";




const App = (props) => {

    return (

            <div className='wrapper'>
                <div className="container">
                    <Header/>
                    <Navbar/>
                    <div className="content">
                        <Routes>
                            <Route path='/profile' element={<ProfileContainter/>}/>
                            <Route path='/dialogs' element={<DialogsContainer/>}/>
                            <Route path="/users" element={<Users/>}/>
                            <Route path='/friends' element={<Friends />}/>
                        </Routes>
                    </div>
                </div>
            </div>

    );
}

export default App;
