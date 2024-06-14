import { useQuery } from "@tanstack/react-query";
import CourseCard2 from "../../components/Navbar/CourseCard/CourseCard2";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyCourse = () => {
  const { user } = useAuth();
  // console.log(user)
  const axiosSecure = useAxiosSecure();
  const { data: courses = [], refetch } = useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `https://dreams-lms-dasboard-server.onrender.com/courses?email=${user.email}`,
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
          My Running Courses: {courses.length}
        </h3>
      </div>
      <div className="md:grid grid-cols-3 md:gap-5 ">
        {courses.map((course) => (
          <CourseCard2 key={course._id} course={course} refetch={refetch} />
        ))}
      </div>
    </>
  );
};

export default MyCourse;
