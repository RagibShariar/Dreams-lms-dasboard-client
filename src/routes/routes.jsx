import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Checkout from "../pages/Dashboard/Checkout/Checkout";
import DashboardHome from "../pages/Dashboard/DashboardHome/DashboardHome";
import EnrolledCourse from "../pages/Dashboard/DashboardHome/EnrolledCourse/EnrolledCourse";
import OrderHistory from "../pages/Dashboard/OrderHistory/OrderHistory";
import Profile from "../pages/Dashboard/Profile/Profile";
import Wishlist from "../pages/Dashboard/Wishlist/Wishlist";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
    ]
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <DashboardHome />,
      },
      {
        path: "my-profile",
        element: <Profile />,
      },
      {
        path: "enrolled-courses",
        element: <EnrolledCourse />,
      },
      {
        path: "wishlist",
        element: <Wishlist />,
      },
      {
        path: "order-history",
        element: <OrderHistory />,
      },
    ],
  },
]);

export default router;
