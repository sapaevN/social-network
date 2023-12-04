import {authAPI} from "../del/api";
import {stopSubmit} from "redux-form";

const AUTH_ME_AC = "AUTH-ME-AC"
const LOGOUT = "LOGOUT"

const initialState = {
       authData:{
           login:undefined,
           id:undefined,
           email:undefined,
       },
       isAuth:false,
}

const authReducer = (state= initialState, action)=>{
    const stateCopy = JSON.parse(JSON.stringify(state))
    switch (action.type){
        case AUTH_ME_AC:
            stateCopy.authData = action.authData
            stateCopy.isAuth = true
            return stateCopy
        case LOGOUT:
            stateCopy.isAuth = action.bool
            return stateCopy
        default:
            return stateCopy

    }
}

export const logoutAC = (bool) => ({type:LOGOUT,bool})

export const authMeAC = (authData)=>({type:AUTH_ME_AC, authData})

export default authReducer




export const authMeTC = () => (dispatch) => {
    authAPI.authMe().then(data =>{
        console.log(data)
        if(data.resultCode === 0){

            dispatch(authMeAC(data.data))
        }
    })
}

export const loginTC = (email,password,rememberMe) => (dispatch)=>{
    authAPI.login(email,password,rememberMe)
        .then(data =>{
            console.log(data)
            if(data.resultCode === 0){
                authAPI.authMe().then(data =>{
                    console.log(data)
                    if(data.resultCode === 0){
                        dispatch(authMeAC(data.data))
                    }
                })
            }else{
                const error = data.messages ? data.messages[0] : "some error"
                dispatch( stopSubmit("login",{_error:error}))
            }
        })
}

export const logOutTC = () =>(dispatch) =>{
    authAPI.logOut().then(data =>{
        if(data.resultCode === 0){
            dispatch(logoutAC(false))
        }
    })
}