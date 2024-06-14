import { useState } from "react";
import { RxEyeClosed, RxEyeOpen } from "react-icons/rx";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import GoogleLogin from "../../components/GoogleLogin/GoogleLogin";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const Toast = Swal.mixin({
    toast: true,
    position: "bottom-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });
  // ====================================
  const { login, user } = useAuth();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  // console.log("from login page", location);
  // console.log(user)

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  if (user) {
    navigate("/dashboard");
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const userInfo = { email, password };

    await login(email, password).then((result) => {
      console.log("from login page", result);
      // navigate(location?.state ? location.state : '/')

      //   fetch(`https://dreams-lms-dasboard-server.onrender.com/users`, {
      //     method: "POST",
      //     headers: {
      //       "Content-type": "application/json",
      //     },
      //     body: JSON.stringify(userInfo),
      //   })
      //     .then((res) => res.json())
      //     .then((data) => {
      //       localStorage.setItem("token", data?.token);
      //       // console.log(data);
      //     });

      //   Toast.fire({
      //     icon: "success",
      //     title: "Signed in successfully",
      //   });
      //   navigate(from, {replace: true});
      // })
      // .catch((error) => {
      //   console.log(error);
      //   Toast.fire({
      //     icon: "error",
      //     title: "Login Failed. Try again",
      //   });
    });
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-xl">
          <h2 className="text-2xl font-semibold text-center text-gray-700">
            Sign in to your account
          </h2>
          <form onSubmit={handleLogin} className="mt-8 space-y-6">
            <div className="">
              <div className="">
                <label
                  htmlFor="email-address"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full mt-2 px-3 py-2 border rounded-md border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div className="mt-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    defaultValue="123456"
                    id="password"
                    name="password"
                    type={passwordVisible ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    className="w-full mt-2 px-3 pr-8 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="btn absolute text-gray-400 right-0 -bottom-1 flex items-center text-sm leading-5 bg-transparent border-none shadow-none hover:bg-transparent"
                  >
                    {passwordVisible ? (
                      <RxEyeOpen className="w-5 h-5" />
                    ) : (
                      <RxEyeClosed className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign in
              </button>
            </div>

            <div className="flex flex-col w-full border-opacity-50">
              <div className="divider  text-sm font-medium leading-6 text-gray-900">
                Or continue with
              </div>
            </div>
            <GoogleLogin />
            <div className="flex justify-center ">
              {/* <button 
                type="button"
                className="flex items-center justify-center w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                <FcGoogle />
                <span className="ml-2">Google</span>
              </button> */}
              {/* <button
                type="button"
                className="flex items-center justify-center w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                <FaGithub />
                <span className="ml-2">GitHub</span>
              </button> */}
            </div>
          </form>
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Don&apos;t have an account?{" "}
              <Link
                to="/register"
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
                state={location.state?.from}
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
