
import { Helmet } from "react-helmet";
import Videobg from "../Video backgroun/Videobg";
import RoomserviceCard from "./RoomService/RoomserviceCard";


const Rooms = () => {
    return (
        <div>
             <Helmet>
      <title>Rooms</title>
      <meta name='Home' content='This is home page' />
      </Helmet>
            <div className="mt-5 mb-6">
               <Videobg></Videobg> 
            </div>
            <div>
                <RoomserviceCard></RoomserviceCard>
            </div>
            
        </div>
    );
};

export default Rooms;