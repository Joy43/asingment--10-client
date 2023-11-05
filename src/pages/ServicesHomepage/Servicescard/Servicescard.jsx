import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion, useTransform } from "framer-motion";
import { useEffect } from 'react';
const Servicescard = ({Services}) => {
    const {_id,Name,DesCription,Price,imghotel,Description,Availability,offers,roomsize}=Services;
    // --------aos--------
    useEffect(() => {
        AOS.init({ duration: 1000 }); // You can adjust the duration as needed
      }, []);
    return (
        <div style={{perspective:2000}}>
          

<motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      drag
      dragElastic={0.18}
      dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      style={{
        perspective: 2000,
        zIndex: 100,
        x: 0,
        y: 0,
      }}
    >
            <div data-aos="fade-up-right" className="card w-96 bg-base-300 shadow-2xl">
            <figure className="px-10 pt-10">
            <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
    <img src={imghotel} alt="profile-picture"  />
  </div>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{Name}</h2>
                <p className="text-xl text-orange-500">Price: ${Price}</p>
                <div className="card-actions">
                   
                    </div>
            </div>
        </div>  
        </motion.div>
        </div>
    );
};

export default Servicescard;