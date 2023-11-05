import React from "react";
import Users from "./Users";
import UsersC from "./Users"
import {connect} from "react-redux";
import {followAC, setUsers, unfollowAC} from "../../redux/users-reducer";


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onfollow: (id) => {
            dispatch(followAC(id))
        },
        onUnFollow: (id) => {
            dispatch(unfollowAC(id))
        },
        setUsers:(users)=>{
            dispatch(setUsers(users))
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Users)



