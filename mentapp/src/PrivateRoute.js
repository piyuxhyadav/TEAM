import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const userDetails = localStorage.getItem("userData");
  // console.log(userDetails);

  if (!userDetails) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
