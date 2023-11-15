import {userAPI} from "../dal/api";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_USERS_COUNT ="SET-USERS-COUNT"
const CURRENT_PAGE = "CURRENT-PAGE"
const IS_FETCHING = "IS-FETCHING"
const SET_USER_ID = "SET-USER-ID"
const FOLLOWING_IN_PROGRESS = "FOLLOWING-IN-PROGRESS"

const initialState = {
    users: [],
    pageSize:5,
    currentPage:1,
    usersCount: 1,
    isFetching: false,
    userID:0,
    isFollowingProgress:[],

}


const usersReducer = (state = initialState, action) => {
    const stateCopy = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case (FOLLOW):
            stateCopy.users.forEach((u) => {
                if (u.id === action.id) {
                    u.followed = true
                }
            })
            return stateCopy
        case (UNFOLLOW):
            stateCopy.users.forEach((u) => {
                if (u.id === action.id) {
                    u.followed = false
                }
            })
            return stateCopy
        case (SET_USERS):
            stateCopy.users = action.users
            return stateCopy
        case (SET_USERS_COUNT):
            stateCopy.usersCount = action.usersCount
            return stateCopy
        case (CURRENT_PAGE):
            stateCopy.currentPage = action.currentPage
            return stateCopy
        case (IS_FETCHING):
            stateCopy.isFetching = action.bool
            return stateCopy
        case (SET_USER_ID):
            stateCopy.userID = action.userID
            return stateCopy
        case (FOLLOWING_IN_PROGRESS):
                stateCopy.isFollowingProgress = action.bool
                    ? [...stateCopy.isFollowingProgress,action.id]
                    : [...stateCopy.isFollowingProgress.filter(id => id != action.id)]
            return stateCopy
        default:
            return stateCopy
    }
}


export const followAC = (id) => ({type: FOLLOW, id: id})
export const unfollowAC = (id) => ({type: UNFOLLOW, id: id})
export const setUsersAC = (users) => ({type: SET_USERS, users: users})
export const setUsersCountAC = (usersCount) =>({type:SET_USERS_COUNT,usersCount:usersCount })
export const currentPageAC = (currentPage) => ({type:CURRENT_PAGE, currentPage:currentPage})
export const toggleIsFetchingAC= (bool) => ({type:IS_FETCHING, bool:bool})
export const setUserIDAC = (userID) =>({type:SET_USER_ID,userID:userID})
export const sayFollowingInProgressAC =(bool,id) =>({type:FOLLOWING_IN_PROGRESS,bool:bool,id:id})


export const getUsersTC = (currentPage,pageSize) => (dispatch)=> {
        dispatch(toggleIsFetchingAC(true))
        userAPI.getUser(currentPage,pageSize)
            .then(data =>{
                dispatch(setUsersAC(data.items))
                dispatch(setUsersCountAC(data.totalCount))
                dispatch(toggleIsFetchingAC(false))
            })
    }

export const unfollowTC = (id) => (dispatch) =>{
    dispatch(sayFollowingInProgressAC(true,id))
    userAPI.unfollow(id)
        .then(data => {
            if(data.resultCode === 0){
                dispatch(unfollowAC(id))
            }
            dispatch(sayFollowingInProgressAC(false,id))
        })
}
export const followTC = (id) => (dispatch) =>{
    dispatch(sayFollowingInProgressAC(true,id))
    userAPI.follow(id)
        .then(data => {
            if(data.resultCode === 0) {
                dispatch(followAC(id))
            }
            dispatch(sayFollowingInProgressAC(false,id))
        })
}




export default usersReducer
