import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleChangeInstructor = (user) => {
    axiosSecure.patch(`/users/instructor/${user.email}`).then((res) => {
      console.log(res);
      refetch();
    });
  };
  const handleChangeStudent = (user) => {
    axiosSecure.patch(`/users/student/${user._id}`).then((res) => {
      console.log(res);
      refetch();
    });
  };

  return (
    <>
      <h2>total users : {users.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Role</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users?.map((user, index) => (
              <tr key={user._id} className="hover">
                <th>{index+1}</th>
                <td>{user.name}</td>
                <td>{user.role}</td>
                <td>{user.email}</td>
                {user.role !== 'admin' && (
                  user.role !== "instructor" ? (
                    <td>
                      <button onClick={() => handleChangeInstructor(user)} className="btn btn-success">
                        Make Instructor
                      </button>
                    </td>
                  ) : (
                    <td>
                      <button onClick={() => handleChangeStudent(user)} className="btn btn-warning">
                        make Student
                      </button>
                    </td>
                  )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ManageUsers;
