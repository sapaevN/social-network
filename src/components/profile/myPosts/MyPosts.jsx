import React from "react";
import s from "./MyPosts.module.scss"
import Post from "./post/Post";
import {Field, reduxForm} from "redux-form";

let AddPostForm  = (props) =>{
    return(
        <form onSubmit={props.handleSubmit}>
            <Field component="textarea"  name="postMessage"></Field>
            <button>add post</button>
        </form>
    )
}

 AddPostForm = reduxForm({form:"addPost"})(AddPostForm)


const MyPosts = (props) => {let postElements = props.postsData.map(post => <Post message={post.message} likesCount={post.likesCount}/>)

    let addPost = (postMessageBody) => {
            props.addPost(postMessageBody.postMessage)
    }

    return (
        <div className={s.mypost}>
            <AddPostForm onSubmit={addPost}/>

            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    );
}



export default MyPosts