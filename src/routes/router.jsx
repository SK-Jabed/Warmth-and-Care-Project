import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import Campaigns from "../pages/Campaigns/Campaigns";
import Dashboard from "../pages/Dashboard/Dashboard";
import HowToHelp from "../pages/HowToHelp/HowToHelp";
import AuthLayout from "../layouts/AuthLayout/AuthLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import CampaignDetails from "../pages/CampaignDetails/CampaignDetails";
import PrivateRoute from "./PrivateRoute";


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
        loader: () => fetch("/campaigns.json"),
      },
      {
        path: "/howToHelp",
        element: <HowToHelp></HowToHelp>,
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/details/:id",
    element: (
      <PrivateRoute>
        <CampaignDetails></CampaignDetails>
      </PrivateRoute>
    ),
    loader: async ({ params }) => {
      const res = await fetch("/campaigns.json");
      const data = await res.json();
      const singleData = data.find((campaign) => campaign.id == params.id);
      console.log(singleData);
      return singleData;
    },
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;