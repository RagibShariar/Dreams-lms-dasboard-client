
const Profile = () => {
  return (
    <>
        <div className="px-6 py-4 w-full bg-white border rounded-lg text-[#002058]">
          <div className="mb-12 flex justify-between border-b-2 border-dashed py-4">
            <p className="text-2xl font-semibold ">My Profile</p>
           
          </div>
          {/* 1st row */}
          <div className="mb-6 md:grid md:grid-cols-2 ">
            <div>
              <p className="mb-1 font-medium">Full Name</p>
              <h3 className=" text-[#685F78]">
                sgsdfgsdfg
              </h3>
            </div>
            <div>
              <p className="mb-1 font-medium">Email</p>
              <h3 className=" text-[#685F78]">
                sgsdfgsdfg
              </h3>
            </div>
          </div>
          {/* 2nd row */}
          <div className="mb-6 md:grid md:grid-cols-2 ">
          <div>
              <p className="mb-1 font-medium ">Registration Date</p>
              <h3 className=" text-[#685F78]">
              January 16, 2024, 11:15 AM
              </h3>
            </div>
          <div>
              <p className="mb-1 font-medium ">Username</p>
              <h3 className=" text-[#685F78]">
              instructordemo
              </h3>
            </div>
          </div>
          {/* 3rd row */}
          <div className="mb-6 md:grid md:grid-cols-2 ">
          <div>
              <p className="mb-1 font-medium ">Email</p>
              <h3 className=" text-[#685F78]">
              instructordemo@example.com
              </h3>
            </div>
          <div>
              <p className="mb-1 font-medium ">Phone Number</p>
              <h3 className=" text-[#685F78]">
              89104-71829
              </h3>
            </div>
          </div>
          {/* 4th row */}
          <div className="mb-6 md:grid md:grid-cols-1 ">
          <div>
              <p className="mb-1 font-medium ">Bio</p>
              <h3 className=" text-[#685F78]">
              Very well thought out and articulate communication. Clear milestones, deadlines and fast work. Patience. Infinite patience. No shortcuts. Even if the client is being careless. Some quick example text to build on the card title and bulk the card's content Moltin gives you platform. As a highly skilled and successfull product development and design specialist with more than 4 Years of My experience lies in successfully conceptualizing, designing, and modifying consumer products specific to interior design and home furnishings.
              </h3>
            </div>
          </div>
        </div>
    </>
  );
};

export default Profile;