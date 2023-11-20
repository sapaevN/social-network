import React from "react";
import s from "./Profile.module.scss"
import MyPosts from "./myPosts/MyPosts";
import ProfileInfo from "./profileInfo/ProfileInfo";
import {connect} from "react-redux";
import {addPostAC, onChangeInputValueAC} from "../../redux/profilesPage-reducer";


const Profile = (props) => {

    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts
                postsData={props.postsData}
                addPosts={props.addPost}
                onChangeInputValue={props.onChangeInputValue}
                postInputValue={props.postInputValue}
            />
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        postsData:state.profilePage.postsData,
        postInputValue:state.profilePage.postInputValue,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPost:()=>{
            dispatch(addPostAC())
        },
        onChangeInputValue:(newValue)=>{
            dispatch(onChangeInputValueAC(newValue))
        }
    }
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)

export default ProfileContainer