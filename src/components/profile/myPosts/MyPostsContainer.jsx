import React from "react";
import s from "./MyPosts.module.scss"
import Post from "./post/Post";
import {addPostAC, onChangeInputValueAC} from "../../../redux/reducers/profilesPage-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../redux/StoreContext";


const MyPostsContainer = (props) => {

    return  (
        <StoreContext.Consumer>
        { (store) => {
            let addPost = () => {
                const action = addPostAC()
                store.dispatch(action)
            }
            let newPostInputValue = (newValue) => {
                const action = onChangeInputValueAC(newValue)
                store.dispatch(action)
            }

            return <MyPosts
                addPost={addPost}
                newPostInputValue={newPostInputValue}
                postsData={store.getState().profilePage.postsData}
                postInputValue={store.getState().profilePage.postInputValue}
            /> ;

        }

     }

    </StoreContext.Consumer>
    )

}

export default MyPostsContainer