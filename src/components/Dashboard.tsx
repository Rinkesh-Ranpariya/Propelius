import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { logout } from "../store/user/userSlice";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userInfo = useSelector((state: RootState) => state.userInfo.userInfo);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="flex justify-between bg-[#ECBC76] p-5">
      <div>
        Welcome <span className="font-bold">{userInfo.name}</span>
      </div>
      <button
        onClick={handleLogout}
        className="text-sm py-2 px-4 rounded-lg bg-black text-white cursor-pointer"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
