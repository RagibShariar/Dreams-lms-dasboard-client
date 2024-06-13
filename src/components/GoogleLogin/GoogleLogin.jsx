import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";

const GoogleLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname;
  // console.log("from google login button click", from)

  const handleGoogleLogin = () => {};

  return (
    <>
      <button
        onClick={handleGoogleLogin}
        className="btn w-full rounded text-base font-semibold tracking-wider text-gray-900"
      >
        <FcGoogle size={24} />
        Continue with Google
      </button>
    </>
  );
};

export default GoogleLogin;
