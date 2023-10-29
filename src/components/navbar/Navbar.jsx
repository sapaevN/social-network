import React from "react";
import s from "./Navbar.module.scss"
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.navbar}>
            <ul className={s.navbar__list}>
                <li className={s.navbar__item}>
                    <NavLink className={(navData) => navData.isActive ? s.active : "" } to="/profile"> Profile</NavLink>
                </li>
                <li className={s.navbar__item}>
                    <NavLink className={(navData) => navData.isActive ? s.active : "" } to="/dialogs"> Dialogs</NavLink>
                </li>
                <li className={s.navbar__item}>
                    <a> News</a>
                </li>
                <li className={s.navbar__item}>
                    <a>Music</a>
                </li>
                <li className={s.navbar__item}>
                    <a>Settings</a>
                </li>
                <li className={s.navbar__item}>
                    <NavLink className={(navData) => navData.isActive ? s.active : "" } to="/friends">Friends</NavLink>
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