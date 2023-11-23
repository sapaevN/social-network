import React from "react";
import s from "./Profile.module.scss"
import MyPosts from "./myPosts/MyPosts";
import ProfileInfo from "./profileInfo/ProfileInfo";
import {connect} from "react-redux";
import {addPostAC, getProfileTC, onChangeInputValueAC} from "../../redux/profilesPage-reducer";
import {Navigate} from "react-router-dom";



class Profile extends React.Component{
    render() {
        if(!this.props.isAuth) return <Navigate to="/login"/>
        return (
            <div className={s.profile}>
                <ProfileInfo profile={this.props.profile}/>
                <MyPosts
                    postsData={this.props.postsData}
                    addPosts={this.props.addPost}
                    onChangeInputValue={this.props.onChangeInputValue}
                    postInputValue={this.props.postInputValue}
                />
            </div>
        );
    }
    componentDidMount() {
        if(window.location.pathname.length <= 8){
            const myID = 29910
            this.props.getProfile(myID)
        }
    }
}
const mapStateToProps = (state) => {
    return {
        postsData:state.profilePage.postsData,
        postInputValue:state.profilePage.postInputValue,
        profile:state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost:()=>{
            dispatch(addPostAC())
        },
        onChangeInputValue:(newValue)=>{
            dispatch(onChangeInputValueAC(newValue))
        },
        getProfile:(userID)=>{
            dispatch(getProfileTC(userID))
        }
    }
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)

export default ProfileContainer