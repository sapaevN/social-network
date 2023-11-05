import React from "react";
import s from "./Navbar.module.scss"
import {NavLink} from "react-router-dom";
import NavbarItem from "./navbarItems/Navbar-items";

const Navbar = () => {
    return (
        <nav className={s.navbar}>
            <ul className={s.navbar__list}>
                <NavbarItem  itemRout="/profile" itemName="Profile"/>
                <NavbarItem  itemRout="/dialogs" itemName="Dialogs"/>
                <NavbarItem  itemRout="/users" itemName="Users"/>
                <li className={s.navbar__item}>
                    <NavbarItem  itemRout="/friends" itemName="Friends"/>
                     <div className={s.friends}>
                         <a href="#" className={s.friend}>
                             <div className={s.friend__logo}></div>
                             <div className={s.friend__name}>bossJym</div>
                         </a>
                         <a href="#" className={s.friend}>
                             <div className={s.friend__logo}></div>
                             <div className={s.friend__name}>Dungeon</div>
                         </a>
                         <a href="#" className={s.friend}>
                             <div className={s.friend__logo}></div>
                             <div className={s.friend__name}>Andrey</div>
                         </a>
                     </div>
                </li>
            </ul>
        </nav>
    );
}
export default Navbar