import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import MainLayout from "../layout/MainLayout";
import AllCourses from "../pages/AllCourses/AllCourses";
import CourseDetail from "../pages/CourseDetail/CourseDetail";
import AddCourse from "../pages/Dashboard/AddCourse/AddCourse";
import DashboardHome from "../pages/Dashboard/DashboardHome/DashboardHome";
import EnrolledCourse from "../pages/Dashboard/DashboardHome/EnrolledCourse/EnrolledCourse";
import EditCourse from "../pages/Dashboard/EditCourse/EditCourse";
import ManageUsers from "../pages/Dashboard/ManageUsers/ManageUsers";
import OrderHistory from "../pages/Dashboard/OrderHistory/OrderHistory";
import Payment from "../pages/Dashboard/Payment/Payment";
import Profile from "../pages/Dashboard/Profile/Profile";
import UpdateProfile from "../pages/Dashboard/UpdateProfile/UpdateProfile";
import Wishlist from "../pages/Dashboard/Wishlist/Wishlist";
import Home from "../pages/Home/Home";
import MyCourse from "../pages/Instructor/MyCourse";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes";

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
        path: "add-course",
        element: <AddCourse />,
      },
      {
        path: "course-details/:id",
        element: <CourseDetail />,
        loader: ({ params }) =>
          fetch(
            `https://dreams-lms-dasboard-server.onrender.com/courses/${params.id}`
          ),
      },
      {
        path: "payment/:id",
        element: <Payment />,
        // loader: ({params})=> fetch(`https://dreams-lms-dasboard-server.onrender.com/courses/${params.id}`)
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoutes>
        <DashboardLayout />
      </PrivateRoutes>
    ),
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
        path: "edit-profile",
        element: <UpdateProfile />,
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
      {
        path: "my-courses",
        element: <MyCourse />,
      },
      {
        path: "all-courses",
        element: <AllCourses />,
      },
      {
        path: "edit-courses/:id",
        loader: ({ params }) =>
          fetch(
            `https://dreams-lms-dasboard-server.onrender.com/courses/${params.id}`
          ),
        element: <EditCourse />,
      },
    ],
  },
]);

export default router;
