import {profileAPI, userAPI} from "../dal/api";

const ADD_POST = "ADD-POST"
const ON_CHANGE_POST_INPUT_VALUE = "ON-CHANGE-POST-INPUT-VALUE"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS = "SET-STATUS"

let initialState = {
    postsData: [
        {id: 1, likesCount: "123", message: "some message"},
        {id: 2, likesCount: "123", message: "hello"},
    ],
    postInputValue: '',
    profile: null,
    status:"",

}
 const profileReducer = (state = initialState, action) => {
    let stateCopy = JSON.parse(JSON.stringify(state))

     switch (action.type){
         case (ADD_POST):
             let newPost = {
                 id: 7,
                 likesCount: "123",
                 message: state.postInputValue
             }
             stateCopy.postsData.push(newPost)
             stateCopy.postInputValue = ''
             return stateCopy
         case (ON_CHANGE_POST_INPUT_VALUE):
             stateCopy.postInputValue = action.newValue
             return stateCopy
         case (SET_USER_PROFILE):
             stateCopy.profile = action.profile
             return stateCopy
         case (SET_STATUS):
             stateCopy.status = action.status
             return stateCopy
         default:
             return stateCopy;
     }

}


export const addPostAC = () => ({type: ADD_POST})
export const setUserProfileAC = (profile)=>({type:SET_USER_PROFILE,profile:profile})
export const onChangeInputValueAC = (newValue) => ({type: ON_CHANGE_POST_INPUT_VALUE, newValue: newValue})

export const setStatusAC = (status) => ({type:SET_STATUS, status:status})

export const getProfileTC = (id) =>(dispatch) =>{
    userAPI.getProfile(id)
        .then(data => {
            dispatch(setUserProfileAC(data))
        })
}
export const getStatusTC = (userID) =>(dispatch) =>{
    profileAPI.getStatus(userID)
        .then(data => {
            dispatch(setStatusAC(data.data))
        })
}

export const updateStatusTC = (status)=>(dispatch)=>{
     profileAPI.updateStatus(status)
}


export default profileReducer
