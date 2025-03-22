import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import JobDetails from "../pages/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../pages/JobApply";

  
  const  router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout ></MainLayout>,
      errorElement: <h2>Route Not Found</h2>,
      children:[
        {
            path:'/',
            element: <Home> </Home>
        },
        {
            path:'/register',
            element: <Register />
        },
        {
            path:'/login',
            element: <Login />
        },
        {
            path:'/jobs/:id',
            element: <PrivateRoute><JobDetails /></PrivateRoute>,
            loader:({params}) => fetch(`http://localhost:5000/jobs/${params.id}`)
        },
        {
            path:'/jobApply/:id',
            element: <PrivateRoute><JobApply /></PrivateRoute>,
       
        },
      ]
    },
  ]);
  
export default router;
