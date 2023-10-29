import React from "react";
import s from "./MyPosts.module.scss"
import Post from "./post/Post";
import {addPostAC, onChangeInputValueAC} from "../../../redux/reducers/profilesPage-reducer";


const MyPosts = (props) => {let postElements = props.postData.map(post => <Post message={post.message} likesCount={post.likesCount}/>)
    const newPostElement = React.createRef()
    let addPost = () => {
        const action = addPostAC()
        props.dispatch(action)
    }
    let newPostInputValue = () => {
        let newValue = newPostElement.current.value
        const action = onChangeInputValueAC(newValue)
        props.dispatch(action)
    }

    return (
        <div className={s.mypost}>
            <form >
                <textarea ref={newPostElement} onChange={newPostInputValue}  value={props.postInputValue}></textarea>
                <button type="button" onClick={addPost} >add post</button>
            </form>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    );
}

export default MyPosts