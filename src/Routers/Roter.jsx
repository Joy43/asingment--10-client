import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../components/Layout/Mainlayout";


const router = createBrowserRouter([
    {
      path: "/",
     element:<Mainlayout></Mainlayout>
    },
  ]);
  export default router