import React from "react";
import s from './Header.module.scss'
import {NavLink} from "react-router-dom";
const Header = (props)=>{
    return(
        <header className={s.header}>
            <div className={s.header__logo}>LOGO</div>
            <div className={s.loginBlock}>
                {
                    props.isAuth ? <div>{props.login}</div> : <NavLink to={"/login"}>Login</NavLink>
                }
            </div>
        </header>
    );
}
export default Header