import axios from "axios";

const AxiosInstance = axios.create({
    withCredentials:true,
    baseURL:"https://social-network.samuraijs.com/api/1.0/",
    headers:{
        "API-KEY":"7b6831af-dd6a-4c76-8595-060d3e1c09da"
    }
})


export const userAPI = {
    getUser(currentPage = 1,pageSize = 10){
        return AxiosInstance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response=> response.data)
    },
    getProfile(id=2){
        console.warn("Please use profileAPI")
        return profileAPI.getProfile(id)
    },
    follow(id){
        return AxiosInstance.post(`follow/${id}`)
            .then(response => response.data)
    },
    unfollow(id){
        return AxiosInstance.delete(`follow/${id}`)
            .then(response => response.data)
    },
    authMe(){
        return AxiosInstance.get(`auth/me`)
            .then(response => response.data)
    }
}


export const profileAPI = {
    getProfile:(userID)=>{
        return AxiosInstance.get(`profile/${userID}`)
            .then(response => response.data)
    },
    getStatus:(userID)=>{
        return AxiosInstance.get(`profile/status/${userID}`)
    },
    updateStatus:(status)=>{
         return AxiosInstance.put(`/profile/status/`,{status:status})
    },
}
