import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  // console.log(location);

  if (loading) {
    return (
      <>
        <div className=" flex items-center justify-center">
          <div className="loading loading-bars loading-lg"></div>
        </div>
        ;
      </>
    );
  }

  if (user) {
    return children;
  }
  // return <Navigate state={location.pathname} to="/login" />;
  return <Navigate state={{ from: location }} replace to="/login" />;
};

export default PrivateRoutes;
