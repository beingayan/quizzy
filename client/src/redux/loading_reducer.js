import { createSlice } from "@reduxjs/toolkit";

/** create reducer */
export const loadingReducer = createSlice({
  name: "laoding",
  initialState: {
    isLoading:false
  },
  reducers: {
    setLoading: (state, action) => {
      return{isLoading:true}
    },
    removeLoading: (state, action) => {
        return{isLoading:false}
      },
  },
});

export const { setLoading,removeLoading } = loadingReducer.actions;

export default loadingReducer.reducer;
