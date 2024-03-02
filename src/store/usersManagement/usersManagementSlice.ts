import { createSlice } from "@reduxjs/toolkit";

export interface User {
  email: string;
  name: string;
  contactNumber: string;
  password: string;
}

interface AllUsers {
  allUsers: User[];
}

const storedUsers = localStorage.getItem("AppUsers");

const initialState: AllUsers = {
  allUsers: storedUsers ? JSON.parse(storedUsers) : [],
};

export const usersManagementSlice = createSlice({
  name: "users management",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const isUserExist = state.allUsers.find(
        (user) => user.email === action.payload.email
      );
      if (!isUserExist) {
        const newUserList = [...state.allUsers, action.payload];
        state.allUsers = newUserList;
        localStorage.setItem("AppUsers", JSON.stringify(newUserList));
        action.payload = true;
      } else {
        action.payload = false;
      }
    },
  },
});

export const { addUser } = usersManagementSlice.actions;
export default usersManagementSlice.reducer;
