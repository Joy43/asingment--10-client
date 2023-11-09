import { useEffect, useState } from "react";


const useServices = () => {
    const [Serviceshome,setServiceshome]=useState([]);
    useEffect(()=>{
fetch('https://server-hotelmanagement.vercel.app/services')
.then(res=>res.json())
.then(data=>setServiceshome(data))
    },[])
    return Serviceshome;
};

export default useServices;