import { useQuery } from "@tanstack/react-query";
import CourseCard from "../../components/Navbar/CourseCard/CourseCard";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AllCourses = () => {
  const axiosSecure = useAxiosSecure();
  const { data: courses = [], refetch } = useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `https://dreams-lms-dasboard-server.onrender.com/courses`,
        {
          headers: {
            authorization: `Beared ${localStorage.getItem("access_token")}`,
          },
        }
      );
      return res.data;
    },
  });

  return (
    <>
      <div>
        <h3 className="mb-8 text-[#002058] font-semibold text-2xl">
          Total Courses: {courses.length}
        </h3>
      </div>
      <div className="md:grid grid-cols-3 md:gap-5 ">
        {courses.map((course) => (
          <CourseCard key={course._id} course={course} />
        ))}
      </div>
    </>
  );
};

export default AllCourses;
