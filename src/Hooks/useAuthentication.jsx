// import { useContext } from "react";
// import { AuthContext } from "../Authentication/Authprovider";

import { useContext } from "react";
import { AuthContext } from "../Authentication/Authprovider";


const useAuthentication = () => {
    const auth=useContext(AuthContext)
    return auth
   
};

export default useAuthentication;