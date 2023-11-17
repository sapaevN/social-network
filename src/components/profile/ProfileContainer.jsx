import React from "react";

import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileTC, getStatusTC, updateStatusTC} from "../../redux/profile-reducer";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let id = this.props.userID
        if(!id){
            id=29910
        }
        this.props.getProfile(id)
       this.props.getStatus(29910)
    }

    render() {
        return <Profile {...this.props}  updateStatus={this.props.updateStatus}/>
    }
}

let mapStateToProps = (store)=>{
    return {
        profile:store.profilePage.profile,
        userID:store.usersPage.userID,
        status:store.profilePage.status
    }
}
let mapDispatchToProps=(dispatch)=>{
    return{
        getProfile:(id)=>{
            dispatch(getProfileTC(id))
        },
        getStatus:(userID) =>{
            dispatch(getStatusTC(userID))
        },
        updateStatus:(status)=>{
            dispatch(updateStatusTC(status))
        }
    }
}



export default  connect(mapStateToProps,mapDispatchToProps)(ProfileContainer)
