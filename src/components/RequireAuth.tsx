import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

interface Props {
  children: React.ReactElement;
}

const RequireAuth: React.FC<Props> = ({ children }) => {
  const location = useLocation();
  const isUserAuthenticated = useSelector(
    (state: RootState) => state.userInfo.isAuthenticated
  );
  const token = localStorage.getItem("userToken");

  if (!isUserAuthenticated || !token) {
    return (
      <Navigate
        to="/login"
        replace={true}
        state={{ currentPath: location.pathname }}
      />
    );
  }

  return children;
};

export default RequireAuth;
