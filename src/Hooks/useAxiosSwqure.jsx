
import axios from "axios";
import { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import useAuthentication from "./useAuthentication";

const axiosSecure=axios.create({
    baseURL:'https://server-hotelmanagement.vercel.app/',
    withCredentials: true
});

const useAxiosSequre = () => {
    const {logOut}= useAuthentication()
    const navigate=useNavigate()
    useEffect(() => {
        axiosSecure.interceptors.response.use(res => {
            return res;
        }, error => {
            console.log('error tracked in the interceptor', error.response)
            if (error.response.status === 401 || error.response.status === 403) {
                console.log('logout the user')
                logOut()
                    .then(() => { 
                        navigate('/login')
                    })
                    .catch(error => console.log(error))
            }
        })
    }, [logOut, navigate])
return axiosSecure;
};

export default useAxiosSequre;