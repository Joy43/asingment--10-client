import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../components/Layout/Mainlayout";
import Home from "../pages/Home/Home";
import Services from "../pages/ServicesHomepage/Services/Services";
import ErrorPage from "../ErrorRouter/ErrorRouter";
import Signup from "../pages/Signup/Signup";
import Login from "../pages/Login/Login";
import Rooms from "../pages/Rooms/Rooms";
import PrivateRouter from "./PrivateRouter";
import { Helmet } from "react-helmet";
import Gallery from "../components/Gallery/Gallery";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Mainlayout></Mainlayout>,
     errorElement:<ErrorPage></ErrorPage>,
    children: [
        {
path:'/',
element:<Home></Home>
        },
        {
         path:'servicehome',
         element:<Services></Services>   
        },
        
        {
          path:'signup',
          element:<Signup></Signup>,
          
        },
        {
path:'login',
element:<Login></Login>
        },
        {
          path:'rooms',
          element:<PrivateRouter><Rooms></Rooms></PrivateRouter>
        },
        {
          path:'gallery',
          element:<Gallery></Gallery>
        }
     ]
    }
  ]);
  export default router
