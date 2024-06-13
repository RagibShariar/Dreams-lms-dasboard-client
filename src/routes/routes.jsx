import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import MainLayout from "../layout/MainLayout";
import Checkout from "../pages/Dashboard/Checkout/Checkout";
import DashboardHome from "../pages/Dashboard/DashboardHome/DashboardHome";
import EnrolledCourse from "../pages/Dashboard/DashboardHome/EnrolledCourse/EnrolledCourse";
import OrderHistory from "../pages/Dashboard/OrderHistory/OrderHistory";
import Profile from "../pages/Dashboard/Profile/Profile";
import Wishlist from "../pages/Dashboard/Wishlist/Wishlist";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import ManageUsers from "../pages/Dashboard/ManageUsers/ManageUsers";

const router = createBrowserRouter([
  {
    path: "",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
    ],
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
      {
        path: "manage-users",
        element: <ManageUsers />,
      },
    ],
  },
]);

export default router;
