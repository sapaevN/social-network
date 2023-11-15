import React from "react";
import s from "./Friends.module.scss"
import Login from "../login/Login";

const Friends = (props) =>{
    if(!this.props.isAuth) {
        return <Login/>
    }
    return(
      <div className={s.name}></div>
    );
}
export default Friends