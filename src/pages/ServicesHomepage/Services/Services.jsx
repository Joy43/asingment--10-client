import { useEffect } from "react";
import useServices from "../../../Hooks/useServices";
import Servicescard from "../Servicescard/Servicescard";



const Services = () => {
    //------------ load data------------
    const Serviceshome= useServices()

    
      
    return (


        <div>
            {/*-------- services ----------*/}

      
          <div   className="grid grid-cols-1 md:grid-cols-3 gap-6 top-5 bottom-3" >
            {
                Serviceshome.map(Services=><Servicescard 
                key={Services._id}
               
      
                Services={Services}>
                </Servicescard>)
            }
            </div>
         
{/* pagination */}

        </div>

    );
};

export default Services;