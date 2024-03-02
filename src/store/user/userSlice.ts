import { createSlice } from "@reduxjs/toolkit";
import { User } from "../usersManagement/usersManagementSlice";

interface UserInfo {
  isAuthenticated: Boolean;
  userInfo: User;
}

const initialState: UserInfo = {
  isAuthenticated: false,
  userInfo: {
    email: "",
    name: "",
    contactNumber: "",
    password: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      const { values, allUsers } = action.payload;
      const userData = allUsers.find(
        (user: User) => user.email === values.email
      );
      if (userData && userData.password === values.password) {
        state.isAuthenticated = true;
        state.userInfo = userData;
        localStorage.setItem("userToken", values.email);
        action.payload = true;
      } else {
        action.payload = false;
      }
    },
    loginWithToken: (state, action) => {
      const { token, allUsers } = action.payload;
      const userData = allUsers.find((user: User) => user.email === token);
      if (userData) {
        state.isAuthenticated = true;
        state.userInfo = userData;
        action.payload = true;
      } else {
        localStorage.removeItem("userToken");
        action.payload = false;
      }
    },
    logout: (state) => {
      state = initialState;
      localStorage.removeItem("userToken");
    },
  },
});

export const { login, loginWithToken, logout } = userSlice.actions;
export default userSlice.reducer;
