import React from "react";

import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileTC} from "../../redux/profile-reducer";
import Login from "../login/Login";




class ProfileContainer extends React.Component {

    componentDidMount() {
        let id = this.props.userID
        if(!id){
            id=2
        }
        this.props.getProfile(id)
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

let mapStateToProps = (store)=>{
    return {
        profile:store.profilePage.profile,
        userID:store.usersPage.userID
    }
}
let mapDispatchToProps=(dispatch)=>{
    return{
        getProfile:(id)=>{
            dispatch(getProfileTC(id))
        }
    }
}



export default  connect(mapStateToProps,mapDispatchToProps)(ProfileContainer)
