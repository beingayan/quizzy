import { createSlice } from "@reduxjs/toolkit";

/** create reducer */
export const authReducer = createSlice({
  name: "auth",
  initialState: {
    userDetail: [],
    isLoggedIn: false,
    isClientAdmin: false,
  },
  reducers: {
    setUserAuth: (state, action) => {
      console.log("state-->", state);
      console.log("action-->", action)
      let { userDetail, token, isLoggedIn, isClientAdmin } = action.payload;
      return {
        ...state,
        userDetail,
        token,
        isLoggedIn,
        isClientAdmin,
      };
    },
  },
});

export const { setUserAuth } = authReducer.actions;

export default authReducer.reducer;
