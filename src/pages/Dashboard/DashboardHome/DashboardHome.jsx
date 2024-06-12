import CourseCard from "../../../components/Navbar/CourseCard/CourseCard";

const DashboardHome = () => {
  return (
    <>
      <div>
        <div className="md:grid grid-cols-3 gap-6">
          <div className="bg-white p-6 border rounded-lg">
            <h4 className="mb-2 text-lg text-[#685F78] font-medium">
              Enrolled Courses
            </h4>
            <p className="text-4xl text-[#002058] font-bold">12</p>
          </div>
          <div className="bg-white p-6 border rounded-lg">
            <h4 className="mb-2 text-lg text-[#685F78] font-medium">
              Active Courses
            </h4>
            <p className="text-4xl text-[#002058] font-bold">03</p>
          </div>
          <div className="bg-white p-6 border rounded-lg">
            <h4 className="mb-2 text-lg text-[#685F78] font-medium">
              Completed Courses
            </h4>
            <p className="text-4xl text-[#002058] font-bold">04</p>
          </div>
          <div className="bg-white p-6 border rounded-lg">
            <h4 className="mb-2 text-lg text-[#685F78] font-medium">
              Total Students
            </h4>
            <p className="text-4xl text-[#002058] font-bold">5</p>
          </div>
          <div className="bg-white p-6 border rounded-lg">
            <h4 className="mb-2 text-lg text-[#685F78] font-medium">
              Total Courses
            </h4>
            <p className="text-4xl text-[#002058] font-bold">11</p>
          </div>
          <div className="bg-white p-6 border rounded-lg">
            <h4 className="mb-2 text-lg text-[#685F78] font-medium">
              Total Earning
            </h4>
            <p className="text-4xl text-[#002058] font-bold">$486</p>
          </div>
        </div>
      </div>

      {/* 2nd row */}
      <div>
        <h3 className="my-8 text-[#002058] font-semibold text-2xl">
          Recently Enrolled Courses
        </h3>
      </div>

      {/* Recent courses */}
      <div className="md:grid grid-cols-3 md:gap-5 ">
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
    </>
  );
};

export default DashboardHome;
