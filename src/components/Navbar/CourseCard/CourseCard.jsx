/* eslint-disable react/prop-types */
import { FaRegHeart, FaStar, FaStarHalf } from "react-icons/fa";
import bookIcon from "../../../assets/icons/icon-01.svg";
import clockIcon from "../../../assets/icons/icon-02.svg";
import "./CourseCard.css";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  return (
    <>
      <div className="course-card p-5 bg-white rounded-lg border transition-all duration-500 ">
        <div className="card-img bg-red-100 h-[210px] relative overflow-hidden rounded-lg">
          <Link to={`/course-details/${course?._id}`}>
            <img
              className="h-[210px] object-cover hover:scale-110 transition-all duration-700"
              src={
                course?.image
                  ? course.image
                  : "https://media.istockphoto.com/id/1396814518/vector/image-coming-soon-no-photo-no-thumbnail-image-available-vector-illustration.jpg?s=612x612&w=0&k=20&c=hnh2OZgQGhf0b46-J2z7aHbIWwq8HNlSDaNp2wn_iko="
              }
              alt=""
            />
          </Link>
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
              <Link to={`/course-details/${course?._id}`}>{course?.courseTitle}</Link>
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

export default CourseCard;
