import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
  baseURL: "https://dreams-lms-dasboard-server.onrender.com",
});

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } = useAuth();

  // request interceptor to add authentication header for every secure api call
  axios.interceptors.request.use(
    function (config) {
      // const token = localStorage.getItem("access_token");
      // console.log("stoppppedd by interceptorssss", token);
      // config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  // response interceptor  401 and 403 status
  axios.interceptors.response.use(
    function (response) {
      return response;
    },
    async function (error) {
      const status = error.response.status;
      if (status === 401 || status === 403) {
        await logOut();
        navigate("login");
      }
      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
