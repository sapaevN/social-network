import {authAPI} from "../del/api";

const AUTH_ME_AC = "AUTH-ME-AC"

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
        default:
            return stateCopy

    }
}


export const authMeAC = (authData)=>({type:AUTH_ME_AC, authData})

export default authReducer




export const authMeTC = () => (dispatch) => {
    authAPI.authMe().then(data =>{
        if(data.resultCode === 0){
            dispatch(authMeAC(data.data))
        }
    })
}