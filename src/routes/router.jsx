import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import Campaigns from "../pages/Campaigns/Campaigns";
import Dashboard from "../pages/Dashboard/Dashboard";
import HowToHelp from "../pages/HowToHelp/HowToHelp";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/campaigns",
        element: <Campaigns></Campaigns>,
      },
      {
        path: "/howToHelp",
        element: <HowToHelp></HowToHelp>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
    ],
  },
]);

export default router;