import { userAPI} from "../del/api";

const GET_USER = "GET-USER"
const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const TOTAL_USERS_COUNT = "TOTAL-USERS-COUNT"
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"
const IS_FETCHING = "IS-FETCHING"
const SHOU_USER_ID = "SHOU_USER_ID"
const IS_DISABLED_BUTTON = "IS-DISABLED-BUTTON"

const initialState = {
    users: [], pageSize: 5, currentPage: 1, totalUsers: 0, isFetching: false,
    isDisabledButton:[],
}

const usersReducer = (state = initialState, action) => {
    const stateCopy = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case GET_USER:
            stateCopy.users = action.users
            return stateCopy
        case FOLLOW:
            if (stateCopy.users) {
                stateCopy.users.forEach(u => {
                    if (u.id === action.userID) {
                        u.followed = true
                    }
                })
            }
            return stateCopy
        case UNFOLLOW:
            if (stateCopy.users) {
                stateCopy.users.forEach(u => {
                    if (u.id === action.userID) {
                        u.followed = false
                    }
                })
            }
            return stateCopy
        case TOTAL_USERS_COUNT:
            stateCopy.totalUsers = action.totalUsers
            return stateCopy
        case SET_CURRENT_PAGE:
            stateCopy.currentPage = action.currentPage
            return stateCopy
        case IS_FETCHING:
                stateCopy.isFetching = action.bool
            return stateCopy
        case IS_DISABLED_BUTTON:
            return {
                ...state,
                isDisabledButton: action.isFetching
                    ? [...state.isDisabledButton, action.userID]
                    : state.isDisabledButton.filter(id=> id!== action.userID)
            }
        default:
            return stateCopy;
    }
}


export const getUsersAC = (users) => ({type: GET_USER, users})
export const followAC = (userID) => ({type: FOLLOW, userID})
export const unfollowAC = (userID) => ({type: UNFOLLOW, userID})
export const setTotalUsersAC = (totalUsers) => ({type: TOTAL_USERS_COUNT, totalUsers})
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const isFetchingAC = (bool) => ({type: IS_FETCHING, bool})
export const showUserProfileAC = (userID) =>({type:SHOU_USER_ID,userID})
export const isDisabledButtonAC = (isFetching,userID) => ({type:IS_DISABLED_BUTTON,isFetching,userID})

export const getUsersTC = () => (dispatch) => {
    dispatch(isFetchingAC(true))
    userAPI.getUsers()
        .then(data => {
            dispatch(getUsersAC(data.items))
            dispatch(setTotalUsersAC(data.totalCount))
            dispatch(isFetchingAC(false))
        })
}
export const setCurrentPageTC = (page) => (dispatch) => {
    dispatch(isFetchingAC(true))
    userAPI.getUsers(page)
        .then(data => {
            dispatch(setCurrentPageAC(page))
            dispatch(getUsersAC(data.items))
            dispatch(isFetchingAC(false))
        })
}

export const followTC = (userID) => (dispatch) => {
    dispatch(isDisabledButtonAC(true,userID))
    userAPI.follow(userID)
        .then(data => {
            if(data.resultCode === 0){
                dispatch(followAC(userID))
            }
        })
    dispatch(isDisabledButtonAC(false,userID))

}

export const unfollowTC = (userID) => (dispatch) => {
    dispatch(isDisabledButtonAC(true,userID))
    userAPI.unfollow(userID)
        .then(data => {
            if(data.resultCode === 0){
                dispatch(unfollowAC(userID))
            }
        })
    dispatch(isDisabledButtonAC(false,userID))

}








export default usersReducer
