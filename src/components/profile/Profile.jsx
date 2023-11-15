import React from "react";
import s from "./Profile.module.scss"
import MyPosts from "./myPosts/MyPosts";
import ProfileInfo from "./profileInfo/ProfileInfo";

import MyPostsContainer from "./myPosts/MyPostsContainer";

const Profile = (props) => {

    return (
        <div className={s.profile}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    );
}




export default Profile