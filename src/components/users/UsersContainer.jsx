import {connect} from "react-redux";
import {followAC, getUsersTC, unfollowAC} from "../../redux/users-reducer";
import React from "react";
import ava from "../../image/ava.png"
import s from "./Users.module.scss"


class Users extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <>
                {
                    this.props.users.map(u => {
                        return <div key={u.id}>

                            <div>
                                <div>
                                    <img className={s.avaImage} src={u.photos.small ? u.photos.small : ava}></img>
                                    <span> {u.name}</span>
                                </div>

                                {
                                    u.followed ? <button type="button" onClick={() => {
                                            this.props.unfollow(u.id)
                                        }}>unfollow</button>
                                        : <button type="button" onClick={() => {
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
        isFollowed: state.usersPage.isFollowed,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: () => {
            dispatch(getUsersTC())
        },
        follow: (userID) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID) => {
            dispatch(unfollowAC(userID))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)

