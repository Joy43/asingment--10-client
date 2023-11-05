import useServices from "../../../Hooks/useServices";
import Servicescard from "../Servicescard/Servicescard";


const Services = () => {
    const Serviceshome= useServices()
    return (


        <div>
            {/*-------- services ----------*/}

            {/* <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      > */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 top-5 bottom-3" >
            {
                Serviceshome.map(Services=><Servicescard 
                key={Services._id}
                Services={Services}>
                </Servicescard>)
            }
            </div>
            {/* </motion.div>   */}
        </div>

    );
};

export default Services;