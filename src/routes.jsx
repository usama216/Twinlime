import { useRoutes } from "react-router-dom";
import Login from "./Pages/AuthenticationPages/Login";
import Signup from "./Pages/AuthenticationPages/Signup";
import LandingPage from "./Pages/Landing/LandingPage";
import ImageUploadGrid from "./components/ImageUploadGrid";
import AboutUsMain from "./Pages/AboutsUs/AboutUsMain";

export default function Router() {
  let element = useRoutes([
    // {
    //   path: "/",
    //   element: <ImageUploadGrid/>,
    // },
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/about-us",
      element: <AboutUsMain />,
    },


    
    {
      path: "/login",
      element: <Login />,
    },

    {
      path: "/signup",
      element: <Signup />,
    },
  ]);

  return element;
}
