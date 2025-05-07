import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from '../Pages/Home/Home/Home'
import Dashboard from '../Pages/Dashboard/Dashboard/Dashboard'
import PrivateRoutes from "./PrivateRoutes";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'',
            element:<Home></Home>
        },
        {
          path:'dashboard',
          element:<PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>
        }
      ]
    },
  ]);

export default router;