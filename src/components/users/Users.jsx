import React from "react";
import s from "./Users.module.scss"
import axios from "axios";
import ava from "../../assets/images/avatar.png"


class UsersC extends React.Component {
    URL = "https://social-network.samuraijs.com/api/1.0/users"
    componentDidMount() {

            axios.get(this.URL)
                .then(response => {
                    const users = response.data.items
                    this.props.setUsers(users)
                    console.log(response)
                })
    }

    render(){
        return (<>

            <div>
                {
                    this.props.users.map((u) => <div key={u.id} className={s.user}>

                            <div className={s.user__head}>
                                <div className={s.user__ava}>
                                    <img src={u.photos.small ? u.photos.small : ava } alt="..."/>
                                </div>
                                <div className={s.user__followed}>
                                    {u.followed
                                        ? <button type="button" onClick={() => {
                                            this.props.onUnFollow(u.id)
                                        }}>unfollow</button>
                                        : <button type="button" onClick={() => {
                                            this.props.onfollow(u.id)
                                        }}>follow</button>
                                    }
                                </div>
                            </div>
                            <div className={s.user__info}>
                                <div className={s.user__name}>
                                    {u.name}
                                </div>
                                {/* <div className={s.user__location}>
                                <span>{u.location.city}</span>
                                <span>{u.location.country}</span>
                            </div>*/}
                                <div className={s.user__status}>
                                    {u.status}
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>

        </>)
    }

}


export default UsersC