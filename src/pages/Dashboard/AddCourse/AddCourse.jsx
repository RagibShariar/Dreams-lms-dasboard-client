const AddCourse = () => {
  return (
    <>
      <div className="bg-gray-100 py-20 font-inter">
        <div className="mb-10 max-w-7xl mx-auto flex justify-between items-center">
        <h2 className="text-3xl font-semibold">Add New Course</h2>
        <button className=" btn btn-outline ">Back to Course</button>
        </div>
        <div className="max-w-7xl px-4 py-12 border rounded-lg mx-auto bg-white">
          <div className="">
            <h4 className="text-[#f66962] text-2xl font-medium ">Course Information</h4>
            <form className="mt-12">
              <div className="mb-3">
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">Course Title</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="w-full input input-bordered "
                  />
                </label>
              </div>
              <div className="mb-3">
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">Course Tagline</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="w-full input input-bordered "
                  />
                </label>
              </div>
              <div className="mb-3">
                <label className="form-control">
                  <div className="label">
                    <span className="label-text">Course Description</span>
                  </div>
                  <textarea
                    className="textarea textarea-bordered h-36"
                    placeholder="Bio"
                  ></textarea>
                </label>
              </div>
              <div>
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">Image Url</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Image URL"
                    className="w-full input input-bordered "
                  />
                </label>
              </div>
              <div className="mt-5 pt-5 text-right">
                <button className="px-12 py-4 rounded-lg  text-white border bg-blue-500 hover:bg-white hover:text-blue-500 hover:border-blue-500 transition-all duration-300 font-semibold">Add Course</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCourse;
