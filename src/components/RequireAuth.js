import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
  const { auth } = useAuth();
  const location = useLocation();
  // console.log(auth);
  console.log(auth);

  return auth?.role === allowedRoles ? (
    <Outlet />
  ) : auth?.user ? (
    (localStorage.removeItem("accessToken"),
    (<Navigate to="/unauthorized" state={{ from: location }} replace />))
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
