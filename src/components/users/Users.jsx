import {connect} from "react-redux";
import {followTC, getUsersTC, isDisabledButtonAC, setCurrentPageTC, unfollowTC} from "../../redux/users-reducer";
import React from "react";
import ava from "../../image/ava.png"
import s from "./Users.module.scss"
import Preloader from "../../commons/preloader";
import {NavLink} from "react-router-dom";
import {getProfileTC} from "../../redux/profilesPage-reducer";



class Users extends React.Component {

    render() {
        let totalPages = Math.ceil(this.props.totalUsers / this.props.pageSize)
        const pages = []
        for(let i = 1; i <= totalPages; i++){
            pages.push(i)
        }
        if(this.props.isFetching){
            return ( <Preloader/>)
        }


            return (
                <>
                    <ul className={s.pagination}>
                        {
                            pages.map(p => {
                                return <li key={p} onClick={()=>{this.props.setCurrentPage(p)}}> <a className={this.props.currentPage === p && s.selected} href="#">{p}</a>   </li>
                            })
                        }
                    </ul>

                    {
                        this.props.users.map(u => {
                            return <div key={u.id}>

                                <div>
                                    <div>
                                        <NavLink onClick={()=>{this.props.showUserProfile(u.id)}}  to={`/profile/${u.id}`}>
                                            <img className={s.avaImage} alt="..."
                                                 src={u.photos.small ? u.photos.small : ava}/>
                                        </NavLink>
                                        <span> {u.name}</span>
                                    </div>

                                    {
                                        u.followed ? <button disabled={this.props.isDisabledButton.some(id=> id === u.id)} type="button" onClick={() => {

                                                this.props.unfollow(u.id)

                                            }}>unfollow</button>
                                            : <button disabled={this.props.isDisabledButton.some(id=> id === u.id)} type="button" onClick={() => {

                                                this.props.follow(u.id)

                                            }}>follow</button>
                                    }

                                </div>

                            </div>

                        })
                    }
                </>
            )

    }

    componentDidMount() {
        this.props.getUsers()
    }

}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize:state.usersPage.pageSize,
        totalUsers:state.usersPage.totalUsers,
        currentPage:state.usersPage.currentPage,
        isFetching:state.usersPage.isFetching,
        isDisabledButton:state.usersPage.isDisabledButton
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: () => {
            dispatch(getUsersTC())
        },
        follow: (userID) => {
            dispatch(followTC(userID))
        },
        unfollow: (userID) => {
            dispatch(unfollowTC(userID))
        },
        setCurrentPage: (currentPage) =>{
            dispatch(setCurrentPageTC(currentPage))
        },
        showUserProfile:(userID)=>{
            dispatch(getProfileTC(userID))
        },
        isDisabledButtonF: (isFetching,userID)=>{
            dispatch(isDisabledButtonAC(isFetching,userID))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)

