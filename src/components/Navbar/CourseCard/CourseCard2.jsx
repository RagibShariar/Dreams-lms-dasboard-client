/* eslint-disable react/prop-types */
import { FaRegHeart, FaStar, FaStarHalf } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import bookIcon from "../../../assets/icons/icon-01.svg";
import clockIcon from "../../../assets/icons/icon-02.svg";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import "./CourseCard.css";

const CourseCard2 = ({ course, refetch }) => {
  const axiosSecure = useAxiosSecure();

  const handleDelete = async (id) => {
    Swal.fire({
      title: `Are you sure to delete ${course.title}?`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure
          .delete(
            `https://dreams-lms-dasboard-server.onrender.com/courses/${course._id}`,
            {
              headers: {
                authorization: `Beared ${localStorage.getItem("access_token")}`,
              },
            }
          )
          .then((res) => {
            if (res.data.deletedCount > 1) {
              console.log("deleted successfully", res);
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
            refetch();
          });
      }
    });
  };

  // const getId = axiosSecure.get(`https://dreams-lms-dasboard-server.onrender.com/courses/${course._id}`)

  return (
    <>
      <div className="relative course-card p-5 bg-white overflow-hidden rounded-lg border transition-all duration-500 ">
        <div className="my-test  h-full w-full absolute top-0 z-20 left-0 opacity-0 hover:backdrop-blur-sm hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-6">
          <Link to={`/dashboard/edit-courses/${course._id}`}>
            <button className=" bg-green-500 text-white px-7 py-2 rounded-full text-sm hover:bg-green-600">
              Edit
            </button>
          </Link>
          <button
            onClick={() => handleDelete(course._id)}
            className=" bg-red-500 text-white px-7 py-2 rounded-full text-sm hover:bg-red-600"
          >
            Delete
          </button>
        </div>
        <div className="card-img w-full h-[210px] relative overflow-hidden rounded-lg">
          <a>
            <img
              className="h-[210px] object-cover transition-all duration-700"
              src={
                course?.image
                  ? course.image
                  : "https://media.istockphoto.com/id/1396814518/vector/image-coming-soon-no-photo-no-thumbnail-image-available-vector-illustration.jpg?s=612x612&w=0&k=20&c=hnh2OZgQGhf0b46-J2z7aHbIWwq8HNlSDaNp2wn_iko="
              }
              alt=""
            />
          </a>
          <div className=" px-3 py-1 rounded-lg bg-white absolute bottom-5 right-5">
            <h3 className="text-[#F66962] font-semibold">
              ${course?.price}{" "}
              <span className="text-[#A5A5A5] text-sm line-through">
                $99.00
              </span>
            </h3>
          </div>
        </div>
        <div className="mt-4 card-content ">
          <div className=" grid grid-cols-12 ">
            <div className="size-[50px] col-span-3   items-center flex ">
              <a href="">
                <img
                  className="rounded-full object-cover h-full"
                  src="https://dreamslms.dreamstechnologies.com/html/assets/img/user/user3.jpg"
                  alt=""
                />
              </a>
            </div>
            <div className="-ml-2 col-span-8 ">
              <h4 className="truncate font-medium text-[#002058]">
                <a href="">{course?.instructor}</a>
              </h4>
              <p className="text-[#685F78] text-sm">Instructor</p>
            </div>
            <div className="col-span-1 flex items-center justify-end ">
              <FaRegHeart className="" size={20} />
            </div>
          </div>
          {/* card title */}
          <div>
            <h2 className="my-4 text-lg font font-medium text-[#002058] hover:text-[#F66962] transition-all duration-500">
              <a href="">{course?.courseTitle}</a>
            </h2>
            <div className="flex justify-between items-center">
              <div className="flex">
                <img className="w-[18px]" src={bookIcon} alt="book" />
                <p className="ml-1 text-[#685F78] text-xs font-medium">
                  12+ Lessons
                </p>
              </div>
              <div className="flex">
                <img className="w-[18px]" src={clockIcon} alt="" />
                <p className="ml-1 text-[#685F78] text-xs font-medium">
                  300hr 20min
                </p>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="flex items-center border-t border-[#C7C7C7] mt-4 pt-4">
            <div className="flex gap-[1px]">
              <FaStar fill="orange" />
              <FaStar fill="orange" />
              <FaStar fill="orange" />
              <FaStar fill="orange" />
              <FaStarHalf fill="orange" />
            </div>
            <div className="text-[#685F78] font-semibold text-sm">
              <span className="mr-1">4.5</span>
              <span>(20)</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseCard2;
