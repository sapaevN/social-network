import React from "react";

const ADD_POST = "ADD-POST"
const ON_CHANGE_POST_INPUT_VALUE = "ON-CHANGE-POST-INPUT-VALUE"

let initialState = {
    postsData: [
        {id: 1, likesCount: "123", message: "some message"},
        {id: 2, likesCount: "123", message: "hello"},
    ],
    postInputValue: ''
}
 const profileReducer = (state = initialState, action) => {
    let stateCopy = JSON.parse(JSON.stringify(state))
    if(action.type === ADD_POST) {
            let newPost = {
                id: 7,
                likesCount: "123",
                message: state.postInputValue
            }
            stateCopy.postsData.push(newPost)
            stateCopy.postInputValue = ''
    }
    else if(action.type === ON_CHANGE_POST_INPUT_VALUE) {
        stateCopy.postInputValue = action.newValue
    }

    return stateCopy;
}


export const addPostAC = () => ({type: ADD_POST})
export const onChangeInputValueAC = (newValue) => ({type: ON_CHANGE_POST_INPUT_VALUE, newValue: newValue})

export default profileReducer
