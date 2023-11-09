import { useEffect, useState } from "react";


const useServices = () => {
    const [Serviceshome,setServiceshome]=useState([]);
    useEffect(()=>{
fetch('https://server-hotelmanagement-nknoi9ilv-ss-joys-projects.vercel.app/services')
.then(res=>res.json())
.then(data=>setServiceshome(data))
    },[])
    return Serviceshome;
};

export default useServices;