import axios from "axios";
import config from '../config'
import toast from "react-hot-toast";
const api = axios.create({
    baseURL:config.BASE_URL,
    headers:{
        "Content-Type":"application/json"
    }
})

api.interceptors.request.use((config)=>{
    //any changes for the request shall be done here.
    return config

},(error)=>Promise.reject(error))


api.interceptors.response.use((response)=>{
    
    return response.data

},(error)=>{
    toast.error(error.response.data.message ||  "Error Occured! Please try again!")
    return Promise.reject(error)
})

export default api