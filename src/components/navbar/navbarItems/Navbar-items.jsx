import React from "react";
import s from "../Navbar.module.scss";
import {NavLink} from "react-router-dom";

const NavbarItem = (props) =>{
    return (
        <li className={s.navbar__item}>
            <NavLink className={(navData) => navData.isActive ? s.active : "" } to={props.itemRout}> {props.itemName}</NavLink>
        </li>
    )
}

export default NavbarItem