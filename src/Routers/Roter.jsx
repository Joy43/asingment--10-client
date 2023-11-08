import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../components/Layout/Mainlayout";
import Home from "../pages/Home/Home";
import Services from "../pages/ServicesHomepage/Services/Services";
import ErrorPage from "../ErrorRouter/ErrorRouter";
import Signup from "../pages/Signup/Signup";
import Login from "../pages/Login/Login";
import Rooms from "../pages/Rooms/Rooms";
import PrivateRouter from "./PrivateRouter";

import Gallery from "../components/Gallery/Gallery";
import CheakOutbook from "../pages/Rooms/Cheakbook/CheakOutbook";
import Booking from "../pages/Rooms/Booking/Booking";
// import UpdateBook from "../pages/Rooms/Updatebook/UpdateBook";


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
        },
        {
          path:'book/:id',
          element:<PrivateRouter><CheakOutbook></CheakOutbook></PrivateRouter>,
          loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path:'bookings',
          element:<PrivateRouter><Booking></Booking></PrivateRouter>,
        },
        // {
        //   path:"updatebook/:id",
        //   element:<UpdateBook></UpdateBook>,
        //   loader:({params})=>fetch(`http://localhost:5000/bookings/${params.id}`),
        //   },
        
     ]
    }
  ]);
  export default router
