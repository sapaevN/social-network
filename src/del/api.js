import axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0",
    withCredentials: true,
    APIKey: "64f737e7-45fd-4155-ab3d-fa5bf01401cf",
})


export const userAPI = {
    getUsers: (page= 1) => {
       return instance.get(`/users?count=5&page=${page}`)
            .then(response => response.data)
    },
    follow:(userID) => {
        return instance.post(`/follow/${userID}`)
            .then(response => response.data)
    },
    unfollow:(userID) => {
        return instance.delete(`/follow/${userID}`)
            .then(response => response.data)
    }
}

export const profileAPI = {
    getProfile:(userID) => {
        return instance.get(`/profile/${userID}`)
            .then(response => response.data)
    },
    getStatus:(userID)=>{
        return instance.get(`/profile/status/${userID}`)
            .then(response => response.data)
    },
    setStatus:(status)=>{
        return instance.put(`/profile/status`,{status:status})
            .then(response => response.data)
    },
}

export const authAPI  = {
    authMe: ()=>{
        return instance.get(`/auth/me`)
            .then(response => response.data)
    },
    login: (email,password,rememberMe = false) =>{
        return instance.post('/auth/login',{email,password,rememberMe})
            .then(response => response.data)
    },
    logOut: () =>{
        return instance.delete('/auth/login',)
            .then(response => response.data)
    }

}