import { Children, useContext } from "react";
import { AuthContext } from "../Authentication/Authprovider";
import { useLocation } from "react-router-dom";


const PrivateRouter = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const const location = useLocation();
    console.log(location.pathname)
    if(loading){
        return <Vortex
        visible={true}
        height="120"
        width="120"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
      />
    }
    if(user?.email){
        return children;
    }
    return <Navigate state={location.pathname} to='/login' replace></Navigate>
   
};

export default PrivateRouter;