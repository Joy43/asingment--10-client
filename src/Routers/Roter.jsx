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

const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Mainlayout>
          {/* Wrap your component with Helmet to set title and meta */}
          <Helmet>
            <title>Home Page Title</title>
            <meta name="description" content="Description for Home Page" />
          </Helmet>
          <Home />
        </Mainlayout>
      ),
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: 'servicehome',
          element: (
            <Services>
              {/* Wrap your component with Helmet to set title and meta */}
              <Helmet>
                <title>Services Page Title</title>
                <meta name="description" content="Description for Services Page" />
              </Helmet>
            </Services>
          ),
        },
        {
          path: 'signup',
          element: (
            <Signup>
              {/* Wrap your component with Helmet to set title and meta */}
              <Helmet>
                <title>Signup Page Title</title>
                <meta name="description" content="Description for Signup Page" />
              </Helmet>
            </Signup>
          ),
        },
        {
          path: 'login',
          element: (
            <Login>
              {/* Wrap your component with Helmet to set title and meta */}
              <Helmet>
                <title>Login Page Title</title>
                <meta name="description" content="Description for Login Page" />
              </Helmet>
            </Login>
          ),
        },
        {
          path: 'rooms',
          element: (
            <PrivateRouter>
              {/* Wrap your component with Helmet to set title and meta */}
              <Helmet>
                <title>Rooms Page Title</title>
                <meta name="description" content="Description for Rooms Page" />
              </Helmet>
              <Rooms />
            </PrivateRouter>
          ),
        },
      ],
    },
  ])
  export default router
