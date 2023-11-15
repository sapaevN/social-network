import s from "./Users.module.scss";
import ava from "../../assets/images/avatar.png";
import React from "react";
import {NavLink} from "react-router-dom";
import { userAPI} from "../../dal/api";


const Users = (props) => {

    let pagesCount = Math.ceil(props.usersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }


    return (

        <>
            <div className={s.pagination}>
                {
                    pages.map(p => {
                        return <span
                            className={props.currentPage === p ? s.pagination__currentPage : s.pagination__page}
                            onClick={() => {
                                props.onPageChanged(p)
                            }}>{p}</span>
                    })
                }
            </div>

            <div>
                {
                    props.users.map((u) => <div key={u.id} className={s.user}>

                            <div className={s.user__head}>
                                <NavLink to={`/profile/${u.id}`} onClick={()=>{props.setUserID(u.id)}} >
                                    <div className={s.user__ava}>
                                        <img src={u.photos.small ? u.photos.small : ava} alt="..."/>
                                    </div>
                                </NavLink>

                                <div className={s.user__followed}>
                                    {u.followed
                                        ? <button disabled={props.isFollowingProgress.some(id => id === u.id)} type="button"
                                                  onClick={() => {props.unfollow(u.id)}}>unfollow</button>
                                        : <button disabled={props.isFollowingProgress.some(id => id === u.id)} type="button"
                                                  onClick={() => {props.follow(u.id)}}>follow</button>
                                    }
                                </div>
                            </div>
                            <div className={s.user__info}>
                                <div className={s.user__name}>
                                    {u.name}
                                </div>

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

export default Users