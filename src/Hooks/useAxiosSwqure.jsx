
import axios from "axios";
import { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import useAuthentication from "./useAuthentication";

const axiosSecure=axios.create({
    baseURL:'https://server-hotelmanagement.vercel.app/',
    withCredentials:true
});

const useAxiosSequre = () => {
    const {logOut}= useAuthentication()
    const navigate=useNavigate()
   useEffect(()=>{
    axiosSecure.interceptors.response.use(res =>{
        return res;
    },erro=>{
        console.log("error tracked in the interceptor",erro.response)
        if(erro.response.status===401||erro.response.status){
            console.log('logout the user')
            logOut()
            .then(()=>{
navigate('/login')
            })
        }
    })

   },[]) 
return axiosSecure;
};

export default useAxiosSequre;