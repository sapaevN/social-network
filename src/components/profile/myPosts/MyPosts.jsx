import React from "react";
import s from "./MyPosts.module.scss"
import Post from "./post/Post";

const MyPosts = (props) => {

    let postElements = props.profilePage.postsData.map(post => <Post message={post.message} likesCount={post.likesCount}/>)


    const newPostElement = React.createRef()
    let addPost = () => {
       props.addPost()
        newPostElement.current.value = ''
    }
    let newPostInputValue = () => {
        let newValue = newPostElement.current.value
        props.newPostInputValue(newValue)
    }

    return (
        <div className={s.mypost}>
            <form >
                <textarea ref={newPostElement} onChange={newPostInputValue}  value={props.profilePage.postInputValue}></textarea>
                <button type="button" onClick={addPost} >add post</button>
            </form>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    );
}

export default MyPosts