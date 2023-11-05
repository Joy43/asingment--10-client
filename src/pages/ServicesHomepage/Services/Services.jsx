import { useEffect } from "react";
import useServices from "../../../Hooks/useServices";
import Servicescard from "../Servicescard/Servicescard";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Services = () => {
    //------------ load data------------
    const Serviceshome= useServices()
    // ---------aos scroall----------
    useEffect(() => {
        AOS.init({ duration: 1000 }); // You can adjust the duration as needed
      }, []);
      
    return (


        <div>
            {/*-------- services ----------*/}

      
          <div  data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-3 gap-6 top-5 bottom-3" >
            {
                Serviceshome.map(Services=><Servicescard 
                key={Services._id}
               
      
                Services={Services}>
                </Servicescard>)
            }
            </div>
         
        </div>

    );
};

export default Services;