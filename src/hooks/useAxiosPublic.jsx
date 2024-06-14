import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://dreams-lms-dasboard-server.onrender.com",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
