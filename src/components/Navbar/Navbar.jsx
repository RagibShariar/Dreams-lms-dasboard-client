import { FaGraduationCap, FaRegUser } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { RxDashboard } from "react-icons/rx";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useUsers from "../../hooks/useUsers";

const Navbar = () => {
  const axiosSecure = useAxiosSecure();
  const { users, refetch } = useUsers();
  const { user, logOut } = useAuth();
  const handleLogOut = () => {
    logOut();
  }



  const handleChangeInstructor = (user) => {
      console.log(user)
      axiosSecure.patch(`/users/instructor/${user.email}`).then((res) => {
        console.log(res);
        refetch();
      });
    };






  return (
    <>
      <div className="navbar  md:px-80 bg-transparent backdrop-blur-2xl sticky top-0 z-20">
        <div className="flex-1">
          <Link to="/" className="">
            <img className="w-40" src={logo} alt="" />
          </Link>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              
            </div>
          </div>
          {
            !user?.email ? <div>
            <Link to="/login" className="px-6 py-2 font-semibold text-sm bg-[#FF4667] text-white rounded-full shadow-sm">Login</Link>
          </div>: ''
          }
          
          {
            user?.email &&
            <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar "
            >
              <div className=" rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="bg-base-100 backdrop-blur-3xl menu menu-dropdown dropdown-content mt-3 z-[1] p-2 shadow-md  w-56 rounded-lg text-base"
            >
              <div className="px-2 flex gap-4 mb-4">
                <div className="w-12 rounded-full">
                  <img
                    className="rounded-full"
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                </div>
                <div>
                      <p className="font-semibold text-lg">{user?.displayName}</p>
                  <p className="text-[#757575] text-sm">Student</p>
                </div>
              </div>
              <li>
                <Link
                  to="/dashboard/my-profile"
                  className="hover:text-[#FF4667]"
                >
                  <FaRegUser />
                  Profile
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="hover:text-[#FF4667]">
                  <RxDashboard />
                  Dashboard
                </Link>
              </li>
              <li>
                <a className="hover:text-[#FF4667]">
                  <FaGraduationCap />
                  My Courses
                </a>
              </li>
                    <li>
                <button onClick={()=>handleChangeInstructor(user)} className="hover:text-[#FF4667]">
                  <FaGraduationCap />
                  Become an Instructor
                </button>
              </li>
              <hr className="my-2" />
              <li>
                <button onClick={handleLogOut} className="hover:bg-[#FF4667] hover:text-white">
                  <FiLogOut />
                  Logout
                </button>
              </li>
            </ul>
          </div>}
        </div>
      </div>
    </>
  );
};

export default Navbar;
