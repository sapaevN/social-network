import React from "react";
import s from "./Profile.module.scss"
import MyPosts from "./myPosts/MyPosts";
import ProfileInfo from "./profileInfo/ProfileInfo";


const Profile = (props) => {

    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts
                postData={props.profilePage.postsData}
                dispatch={props.dispatch}
                postInputValue={props.postInputValue}
            />
        </div>
    );
}
export default Profile