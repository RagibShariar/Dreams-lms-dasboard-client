import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const EditCourse = () => {
  const navigate = useNavigate();
  const course = useLoaderData();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const courseTitle = form.title.value;
    const tagline = form.tagline.value;
    const price = form.price.value;
    const description = form.title.value;
    const image = form.image.value;
    const courseInfo = { courseTitle, tagline, price, description, image };
    // console.log(courseInfo);

    axios
      .patch(
        `https://dreams-lms-dasboard-server.onrender.com/courses/${course._id}`,
        courseInfo,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      )
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Course updated successfully",
            showConfirmButton: false,
            timer: 1000,
          });
          form.reset();
          navigate(-1);
        }
      });
  };

  return (
    <>
      <div className="bg-gray-100 py-20 font-inter">
        <div className="mb-10 max-w-7xl mx-auto flex justify-between items-center">
          <h2 className="text-3xl font-semibold">
            Edit your Course information
          </h2>
          <button className=" btn btn-outline ">Back to Course</button>
        </div>
        <div className="max-w-7xl px-4 py-12 border rounded-lg mx-auto bg-white">
          <div className="">
            <h4 className="text-[#f66962] text-2xl font-medium ">
              Course Information
            </h4>
            <form onSubmit={handleSubmit} className="mt-12">
              <div className="mb-3">
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">Course Title</span>
                  </div>
                  <input
                    required
                    defaultValue={course?.courseTitle}
                    type="text"
                    name="title"
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
                    required
                    defaultValue={course?.tagline}
                    type="text"
                    name="tagline"
                    placeholder="Type here"
                    className="w-full input input-bordered "
                  />
                </label>
              </div>
              <div className="mb-3">
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">Price</span>
                  </div>
                  <input
                    required
                    defaultValue={course?.price}
                    type="number"
                    name="price"
                    placeholder="Type Price"
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
                    required
                    defaultValue={course?.description}
                    className="textarea textarea-bordered h-36"
                    name="description"
                    placeholder="Description"
                  ></textarea>
                </label>
              </div>
              <div>
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">Image Url</span>
                  </div>
                  <input
                    required
                    defaultValue={course?.image}
                    type="text"
                    name="image"
                    placeholder="Image URL"
                    className="w-full input input-bordered "
                  />
                </label>
              </div>
              <div className="mt-5 pt-5 text-right">
                <button className="px-12 py-4 rounded-lg  text-white border bg-blue-500 hover:bg-white hover:text-blue-500 hover:border-blue-500 transition-all duration-300 font-semibold">
                  Update Course
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditCourse;
