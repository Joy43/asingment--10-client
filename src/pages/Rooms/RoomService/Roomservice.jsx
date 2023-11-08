import useServices from "../../../Hooks/useServices";
import RoomserviceCard from "./RoomserviceCard";


const Roomservice = () => {
    const Roomservices =useServices()
    return (
        <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 top-3 bottom-4 ">
               
               {
                    Roomservices.map(roomservice =>
                        <RoomserviceCard
                        key={roomservice._id}
                        roomservice={roomservice}> </RoomserviceCard> )
                }
              
            </div>
        </div>
    );
};

export default Roomservice;