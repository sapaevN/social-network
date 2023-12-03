import React from "react";
import Preloader from "../../commons/preloader";
import ava from "../../../image/ava.png"
import ProfileStatus from "./profileStatus/profileStatus";

const ProfileInfo = (props) => {

    if(!props.profile){
       return <Preloader/>
    }else{
        return (
            <>
                <div>
                    <img src={props.profile.photos.large ? props.profile.photos.large :ava} alt='...'></img>
                </div>
                <div>
                    <div>{props.profile.fullName}</div>
                    <ProfileStatus status={props.status} setStatus={props.setStatus} />
                </div>
            </>
        );
    }



}
export default ProfileInfo