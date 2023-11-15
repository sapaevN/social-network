import React from "react";
import {connect} from "react-redux";
import {
    followAC,
    unfollowAC,
    setUserIDAC, sayFollowingInProgressAC, getUsersTC, unfollowTC, followTC
}
    from "../../redux/users-reducer";

import Users from "./Users"
import Preloader from "../../commons/Preloader";
import Login from "../login/Login";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage,this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsersTC(pageNumber,this.props.pageSize)
    }

    render() {
        if(!this.props.isAuth) {
            return <Login/>
        }
        else{
            return <>
                {this.props.isFetching ? <Preloader/> : null}
                {this.props.isFetching
                    ? null
                    : <Users
                        users={this.props.users}
                        currentPage={this.props.currentPage}
                        onPageChanged={this.onPageChanged}
                        onfollow={this.props.onfollow}
                        onUnFollow={this.props.onUnFollow}
                        pageSize={this.props.pageSize}
                        usersCount={this.props.usersCount}
                        setUserID={this.props.setUserID}
                        sayFollowingInProgress={this.props.sayFollowingInProgress}
                        isFollowingProgress={this.props.isFollowingProgress}
                        unfollow={this.props.unfollow}
                        follow={this.props.follow}
                    />}
            </>
        }
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        usersCount: state.usersPage.usersCount,
        isFetching: state.usersPage.isFetching,
        isFollowingProgress:state.usersPage.isFollowingProgress,
        isAuth: state.auth.isAuth,
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
        setUserID: (userId)=>{
            dispatch(setUserIDAC(userId))
        },
        sayFollowingInProgress:(bool,id)=>{
            dispatch(sayFollowingInProgressAC(bool,id))
        },
        getUsersTC:(currentPage,pageSize)=>{
            dispatch(getUsersTC(currentPage,pageSize))
        },
        unfollow:(id)=>{
            dispatch(unfollowTC(id))
        },
        follow:(id)=>{
            dispatch(followTC(id))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)



