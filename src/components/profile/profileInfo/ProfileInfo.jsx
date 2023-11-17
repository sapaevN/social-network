import React from "react";
import Preloader from "../../../commons/Preloader";
import Status from "./Status";
const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>
    }
    console.log(props)


    return (
       <>
           <div>
               <img src={props.profile.photos.large} alt='...'></img>
           </div>
           <div>
               <div>{props.profile.fullName}</div>
               <div><Status updateStatus={props.updateStatus}  status={props.status}/></div>
           </div>
       </>
    );

}
export default ProfileInfo