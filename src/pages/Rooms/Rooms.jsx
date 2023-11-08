
import { Helmet } from "react-helmet";
import Videobg from "../Video backgroun/Videobg";

import Roomservice from "./RoomService/Roomservice";


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
            <div className="mt-4">
             <Roomservice></Roomservice>
            </div>
            
        </div>
    );
};

export default Rooms;