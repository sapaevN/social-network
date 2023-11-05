const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"


const initialState = {
    users: []
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
        default:
            return stateCopy
    }
}


export const followAC = (id) => ({type: FOLLOW, id: id})
export const unfollowAC = (id) => ({type: UNFOLLOW, id: id})

export const setUsers = (users) => ({type: SET_USERS, users: users})

export default usersReducer