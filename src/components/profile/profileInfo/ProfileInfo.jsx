import React from "react";
import Preloader from "../../../commons/Preloader";
const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>
    }

    return (
       <>
           <div>
               <img src={props.profile.photos.large} alt='...'></img>
           </div>
           <div>
               <div>Sapaev Nuriddin</div>
               <div>{props.profile.aboutMe}</div>
           </div>
       </>
    );

}
export default ProfileInfo