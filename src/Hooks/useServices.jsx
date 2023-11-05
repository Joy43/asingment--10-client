import { useEffect, useState } from "react";


const useServices = () => {
    const [Serviceshome,setServiceshome]=useState([]);
    useEffect(()=>{
fetch('http://localhost:5000/services')
.then(res=>res.json())
.then(data=>setServiceshome(data))
    },[])
    return Serviceshome;
};

export default useServices;