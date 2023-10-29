import React from "react";
import s from "./Post.module.scss"

const Post = (props) => {
    return (
        <div className={s.post}>
            <div className={s.post__logo}></div>
            <div className={s.post__text}>{props.message}</div>
            <div className={s.post__likes}>likes <span>{props.likesCount}</span></div>
        </div>
    );
}
export default Post