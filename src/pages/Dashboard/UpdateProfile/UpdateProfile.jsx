const UpdateProfile = () => {
  return (
    <>
      {/* <div className=" bg-white rounded-lg border">
        <div className="p-6  border-b">
        <h2 className="text-2xl font-bold mb-4">Profile Details</h2>
        <p className="mb-6">
          You have full control to manage your own account setting.
        </p>
        </div>
        <div className="p-6 border-b flex items-center mb-6">
          <img
            src="https://dreamslms.dreamstechnologies.com/react/static/media/user11.8edf1918832887f285d5.jpg"
            alt="Your avatar"
            className="rounded-full w-24 h-24 mr-4 object-cover"
          />
          <div>
            <p className="text-lg">Your avatar</p>
            <p className="text-gray-500 text-sm">
              PNG or JPG no bigger than 800px wide and tall.
            </p>
          </div>
          <div className="ml-auto flex space-x-2">
            <button className="btn btn-outline btn-success">Update</button>
            <button className="btn btn-outline btn-error">Delete</button>
          </div>
        </div>

        <div className="px-6">
        <h3 className="text-xl font-bold mb-4">Personal Details</h3>
        <p className="mb-6">Edit your personal information and address.</p>
        </div>
        <form className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block mb-1">First Name</label>
              <input
                type="text"
                placeholder="Enter your first Name"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block mb-1">Last Name</label>
              <input
                type="text"
                placeholder="Enter your last Name"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block mb-1">Phone</label>
              <input
                type="text"
                placeholder="Enter your Phone"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your Email"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block mb-1">Birthday</label>
              <input
                type="date"
                placeholder="Birth of Date"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block mb-1">Country</label>
              <select className="select select-bordered w-full">
                <option>Select Country</option>
                <option>Country 1</option>
                <option>Country 2</option>
              </select>
            </div>
            <div>
              <label className="block mb-1">Address Line 1</label>
              <input
                type="text"
                placeholder="Address"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block mb-1">Address Line 2 (Optional)</label>
              <input
                type="text"
                placeholder="Address"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block mb-1">City</label>
              <input
                type="text"
                placeholder="Enter your City"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block mb-1">ZipCode</label>
              <input
                type="text"
                placeholder="Enter your Zipcode"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <button className="btn btn-primary">Update Profile</button>
        </form>
      </div> */}


<div className="bg-white rounded-lg border">
      <div className="p-6 border-b">
        <h2 className="text-2xl font-bold mb-2">Profile Details</h2>
        <p className="text-gray-600">You have full control to manage your own account settings.</p>
      </div>

      <div className="p-6 border-b flex items-center">
        <img
          src="https://dreamslms.dreamstechnologies.com/react/static/media/user11.8edf1918832887f285d5.jpg"
          alt="Your avatar"
          className="rounded-full w-24 h-24 mr-4 object-cover"
        />
        <div>
          <p className="text-lg font-semibold">Your avatar</p>
          <p className="text-gray-500 text-sm">PNG or JPG no bigger than 800px wide and tall.</p>
        </div>
        <div className="ml-auto flex space-x-2">
          <button className="px-4 py-2 border border-green-500 text-green-500 rounded hover:bg-green-500 hover:text-white transition">Update</button>
          <button className="px-4 py-2 border border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-white transition">Delete</button>
        </div>
      </div>

      <div className="px-6 py-6">
        <h3 className="text-xl font-bold mb-2">Personal Details</h3>
        <p className="text-gray-600 mb-4">Edit your personal information and address.</p>
      </div>

      <form className="px-6 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block mb-1 font-semibold">First Name</label>
            <input
              type="text"
              placeholder="Enter your first Name"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Last Name</label>
            <input
              type="text"
              placeholder="Enter your last Name"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Phone</label>
            <input
              type="text"
              placeholder="Enter your Phone"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Email</label>
            <input
              type="email"
              placeholder="Enter your Email"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Birthday</label>
            <input
              type="date"
              placeholder="Birth of Date"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Country</label>
            <select className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Select Country</option>
              <option>Country 1</option>
              <option>Country 2</option>
            </select>
          </div>
          <div>
            <label className="block mb-1 font-semibold">Address Line 1</label>
            <input
              type="text"
              placeholder="Address"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Address Line 2 (Optional)</label>
            <input
              type="text"
              placeholder="Address"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">City</label>
            <input
              type="text"
              placeholder="Enter your City"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">ZipCode</label>
            <input
              type="text"
              placeholder="Enter your Zipcode"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
          <div className=" w-full mb-3">
            <label className="block mb-1 font-semibold">About Yourself</label>
            <textarea
              placeholder="Write something about you"
              className="w-full h-36 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className=" w-full mb-7">
            <label className="block mb-1 font-semibold">Photo URL</label>
            <input
              type="text"
              placeholder="provide your photo url"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        <button className="w-full my-3 md:w-auto px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Update Profile</button>
      </form>
    </div>
    </>
  );
};

export default UpdateProfile;
