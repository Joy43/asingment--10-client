import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../components/Layout/Mainlayout";
import Home from "../pages/Home/Home";
import Services from "../pages/ServicesHomepage/Services/Services";
import ErrorPage from "../ErrorRouter/ErrorRouter";


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
          path:'',
          
        },
        {

        },
        {
          
        }
     ]
    }
  ]);
  export default router
