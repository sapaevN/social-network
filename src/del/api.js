import axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0",
    withCredentials: true,
    APIKey: "04e2b482-2843-46d7-8848-9e39f72f12cf",
})


export const userAPI = {
    getUsers: () => {
       return instance.get(`/users`)
            .then(response => response.data)
    },
}