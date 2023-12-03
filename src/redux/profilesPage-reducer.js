import {profileAPI} from "../del/api";

const ADD_POST = "ADD-POST"
const ON_CHANGE_POST_INPUT_VALUE = "ON-CHANGE-POST-INPUT-VALUE"
const SET_PROFILE = "SET-PROFILE"
const GET_STATUS = "GET-STATUS"
const SET_STATUS = "SET-STATUS"


const initialState = {
    postsData: [
        {id: 1, likesCount: "123", message: "some message"},
        {id: 2, likesCount: "123", message: "hello"},
    ],
    profile: null,
    status: null,
}


const profilePageReducer = (state = initialState, action) => {
    const stateCopy = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 7,
                likesCount: "123",
                message: action.postMessage
            }
            stateCopy.postsData.push(newPost)
            return stateCopy

        case SET_PROFILE:
            stateCopy.profile = action.profile
            return stateCopy
        case GET_STATUS:
            stateCopy.status = action.status
            return stateCopy
        case SET_STATUS:
            stateCopy.status = action.status
            return stateCopy
        default:
            return stateCopy;
    }
}

export default profilePageReducer
export const setProfileAC = (profile) => ({type: SET_PROFILE, profile})
export const addPostAC = (postMessage) => ({type: ADD_POST,postMessage})
export const getStatusAC = (status) => ({type: GET_STATUS, status})
const setStatusAC = (status) => ({type: SET_STATUS, status})


export const getProfileTC = (userID) => (dispatch) => {
    profileAPI.getProfile(userID).then(data => {
        dispatch(setProfileAC(data))
    })

}

export const getStatusTC = (userID) => (dispatch) => {
    profileAPI.getStatus(userID)
        .then(data => {
            dispatch(getStatusAC(data))
        })
}

export const setStatusTC = (status) => (dispatch) => {
    profileAPI.setStatus(status)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setStatusAC(data.data))
            }
        })
}


export const onChangeInputValueAC = (newValue) => ({type: ON_CHANGE_POST_INPUT_VALUE, newValue: newValue})