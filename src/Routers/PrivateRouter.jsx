import { useContext } from "react";
import { AuthContext } from "../Authentication/Authprovider";
import { Navigate, useLocation } from "react-router-dom";
import { Player, Controls } from '@lottiefiles/react-lottie-player';

const PrivateRouter = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location = useLocation();
    console.log(location.pathname)
    if(loading){

        
        return <Player
        autoplay
        loop
        src="https://lottie.host/?file=bb39d38d-bbc1-4995-8ad0-fe126cf99e20/0hU9jK33WU.json"
        style={{ height: '450px', width: '350px' }}
      >
        <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
      </Player>
        
      
    }
    if(user?.email){
        return children;
    }
    return <Navigate state={location.pathname} to='/login' replace></Navigate>
   
};

export default PrivateRouter;