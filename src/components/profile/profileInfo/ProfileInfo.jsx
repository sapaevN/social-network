import React from "react";
import Preloader from "../../../commons/preloader";
import ava from "../../../image/ava.png"

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
                    <div>My Birthday is 20th june</div>
                </div>
            </>
        );
    }



}
export default ProfileInfo