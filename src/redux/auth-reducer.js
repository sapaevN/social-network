import {userAPI} from "../dal/api";

const SET_USER_DATA = "SET-USER-DATA"


const initialState = {
    authData:{
       id:null,
       email:null,
       login:null
   },
    isAuth:false,

}


const authReducer = (state = initialState, action) => {
    const stateCopy = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case (SET_USER_DATA):
            stateCopy.authData = action.data
            stateCopy.isAuth = true
            return stateCopy
        default:
            return stateCopy
    }
}


export const  setAuthUserDataAC = (data) =>({type:SET_USER_DATA, data:data})
export const authMeTC = () => (dispatch)=>{
    userAPI.authMe()
        .then(data => {
            if(data.resultCode === 0){
                dispatch(setAuthUserDataAC(data.data))
            }
        })
}
export default authReducer