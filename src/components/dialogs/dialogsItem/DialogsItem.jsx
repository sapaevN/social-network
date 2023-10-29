import React from "react";
import s from "./DialogsItem.module.scss"
import {NavLink} from "react-router-dom";

const DialogsItem = (props) =>{
    return(
        <li className={s.item}>
            <NavLink  to={props.path}  >{props.name}</NavLink>
        </li>
    );
}
export default DialogsItem