import React from "react";
import s from './Header.module.scss'
const Header = ()=>{
    return(
        <header className={s.header}>
            <div className={s.header__logo}>LOGO</div>
        </header>
    );
}
export default Header