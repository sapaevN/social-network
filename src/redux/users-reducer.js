import {userAPI} from "../del/api";

const GET_USER = "GET-USER"
const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"

const initialState = {
    users:[],
    isFollowed:false,
}



const usersReducer = (state = initialState, action) => {
    const stateCopy = JSON.parse(JSON.stringify(state))
    switch (action.type){
        case GET_USER:
            stateCopy.users = action.users
            return stateCopy
        case FOLLOW:
                if(stateCopy.users){
                    stateCopy.users.forEach(u =>{
                        if(u.id == action.userID){
                            u.followed = true
                        }
                    })
                }
            return stateCopy
        case UNFOLLOW:
            if(stateCopy.users){
                stateCopy.users.forEach(u =>{
                    if(u.id == action.userID){
                        u.followed = false
                    }
                })
            }
            return stateCopy
        default:
            return stateCopy;
    }
}


export const getUsersAC = (users)=>({type:GET_USER, users})
export const followAC = (userID) => ({type:FOLLOW,userID})
export const unfollowAC= (userID) => ({type:UNFOLLOW,userID})
export const getUsersTC = () =>(dispatch)=>{
    userAPI.getUsers()
        .then(data =>{
            console.log(data)
            dispatch(getUsersAC(data.items))
        })
}

export default usersReducer
