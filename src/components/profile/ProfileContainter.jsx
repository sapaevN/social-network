import React from "react";
import s from "./Profile.module.scss"
import MyPosts from "./myPosts/MyPosts";
import ProfileInfo from "./profileInfo/ProfileInfo";
import {connect} from "react-redux";
import {
    addPostAC,
    getProfileTC,
    getStatusTC,
    onChangeInputValueAC,
    setStatusTC
} from "../../redux/profilesPage-reducer";
import withAuthNavigate from "../../hoc/withAuthNavigate";
import {compose} from "redux";
import {authMeTC} from "../../redux/auth";



class Profile extends React.Component{
    render() {
       /* if(!this.props.isAuth) {
            return <Navigate to="/login"/>
        }*/
            return (
                <div className={s.profile}>
                    <ProfileInfo profile={this.props.profile} status={this.props.status} setStatus={this.props.setStatus}/>
                    <MyPosts
                        postsData={this.props.postsData}
                        addPost={this.props.addPost}
                    />
                </div>
            );


    }
    componentDidMount() {
        if(window.location.pathname.length <= 8){
            const myID = 29910
            this.props.getProfile(myID)
            this.props.getStatus(myID)
        }

    }
}
const mapStateToProps = (state) => {
    return {
        postsData:state.profilePage.postsData,
        postInputValue:state.profilePage.postInputValue,
        profile:state.profilePage.profile,
        isAuth: state.auth.isAuth,
        status: state.profilePage.status
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost:(postMessage)=>{
            dispatch(addPostAC(postMessage))
        },
        getProfile:(userID)=>{
            dispatch(getProfileTC(userID))
        },
        getStatus:(userID) =>{
            dispatch(getStatusTC(userID))
        },
        setStatus:(status) =>{
            dispatch(setStatusTC(status))
        },
        getAuthMeData: () => {
            dispatch(authMeTC())
        }

    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthNavigate
    )(Profile)


