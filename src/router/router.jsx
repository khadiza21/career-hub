import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";

  
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
      ]
    },
  ]);
  
export default router;
