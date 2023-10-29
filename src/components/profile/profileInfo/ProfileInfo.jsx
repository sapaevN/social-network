import React from "react";
import s from "./ProfileInfo.module.scss"
import ava from "../../../image/avaKotVSapogah.jpg"
const ProfileInfo = () => {
    return (
       <>
           <div>
               <img src={ava} alt='...'></img>
           </div>
           <div>
               <div>Sapaev Nuriddin</div>
               <div>My Birthday is 20th june</div>
           </div>
       </>
    );

}
export default ProfileInfo