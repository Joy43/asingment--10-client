import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../components/Layout/Mainlayout";
import Home from "../pages/Home/Home";
import Services from "../pages/ServicesHomepage/Services/Services";


const router = createBrowserRouter([
    {
      path: "/",
     element:<Mainlayout></Mainlayout>,
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
