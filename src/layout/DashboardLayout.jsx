import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import Navbar from "../components/Navbar/Navbar";
import { MdOutlineDashboardCustomize, MdVolumeUp } from "react-icons/md";
import { FaCog, FaFileAlt, FaGraduationCap, FaHeart, FaStar, FaUser } from "react-icons/fa";
import { BiCog, BiSolidBadgeDollar, BiSolidCart, BiSolidCoupon, BiSolidLogOut, BiSolidTachometer } from "react-icons/bi";
import { BsFillRocketTakeoffFill } from "react-icons/bs";

const DashboardLayout = () => {
  const location = useLocation();
  // console.log(location);

  return (
    <>
      <Navbar />
      <Breadcrumb title={location.pathname} />
      <div className="bg-[#fafafa]  font-inter">
        <div className="max-w-7xl mx-auto">
          <div className="md:grid md:grid-cols-12 gap-6">
            {/* left side bar */}
            <div className="col-span-3 py-12 ">
              <div className="relative z-10 text-center px-6 py-7 rounded-lg border bg-white">
                <div className="bg-[#f44364] -z-10 absolute w-full h-28 top-0 right-0 rounded-t-lg"></div>
                <div className="w-[125px] h-[125px]  mb-5 mx-auto border-4 border-white rounded-full">
                  <img
                    className="overflow-hidden "
                    src="https://cdn-icons-png.freepik.com/512/147/147142.png"
                    alt=""
                  />
                </div>
                <div>
                  <h2 className="mb-1 text-xl capitalize font-semibold text-[#22100D]">
                    ragib Shariar
                  </h2>
                  <p className="capitalize text-[#685F78]">student</p>
                </div>
                <div>
                  <button className="w-full mt-7 py-3 rounded-lg text-white bg-[#FF4667] font-semibold">Add New Course</button>
                </div>
              </div>
              {/*  */}
              <div className="bg-white p-6 mt-6 border rounded-lg ">
                <h4 className="mb-5 text-[#002058] font-semibold">Dashboard</h4>
                {/* dashboard menu */}
                <div>
                  <ul className="text-[#685F78] space-y-4">
                    <Link to="">
                      <a className="flex items-center gap-2 " ><BiSolidTachometer /> Dashboard</a>
                    </Link>
                    <li>
                      <NavLink to="my-profile" state={ {from: location}}
                        className="flex items-center gap-2 " href="#"><FaUser /> My profile</NavLink>
                    </li>
                    <li>
                      <NavLink to="enrolled-courses"
                        className="flex items-center gap-2 " href="#"><FaGraduationCap />Enrolled Course</NavLink>
                    </li>
                    <li>
                      <NavLink to="wishlist"
                        className="flex items-center gap-2 " href="#"><FaHeart />Wishlist</NavLink>
                    </li>
                    <li>
                      <a className="flex items-center gap-2 " href="#"><FaStar />Reviews</a>
                    </li>
                    <li>
                      <NavLink to="order-history"
                        className="flex items-center gap-2 " href="#"><BiSolidCart />Order History</NavLink>
                    </li>
                    <li>
                      <a className="flex items-center gap-2 " href="#"><BiSolidCoupon />Support Tickets</a>
                    </li>
                    
                  </ul>
                </div>
                <div>
                  <h4 className="mb-5 mt-10 text-[#002058] font-semibold">Instructor </h4>
                  <ul className="text-[#685F78] space-y-4">
                    <li>
                      <a className="flex items-center gap-2 " href="#"><BsFillRocketTakeoffFill /> My Courses</a>
                    </li>
                    <li>
                      <a className="flex items-center gap-2 " href="#"><MdVolumeUp /> Announcements</a>
                    </li>
                    <li>
                      <a className="flex items-center gap-2 " href="#"><FaFileAlt /> Assignments</a>
                    </li>
                    <li>
                      <a className="flex items-center gap-2 " href="#"><BiSolidBadgeDollar /> Earnings</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-5 mt-10 text-[#002058] font-semibold">Account Settings</h4>
                  <ul className="text-[#685F78] space-y-4">
                    <li>
                      <a className="flex items-center gap-2 " href="#"><FaCog /> Settings</a>
                    </li>
                    <li>
                      <a className="flex items-center gap-2 " href="#"><BiSolidLogOut /> Logout</a>
                    </li>
                  </ul>
                </div>
              </div>
              {/*  */}
              
              {/*  */}
            </div>
            {/* left side bar ends here */}
            {/*  dashboard content here */}
            <div className="col-span-9 py-12">
              <Outlet />
            </div>
            {/* dashboard content end here */}
          </div>
        </div>
      </div>
      <div>Footer</div>
    </>
  );
};

export default DashboardLayout;
