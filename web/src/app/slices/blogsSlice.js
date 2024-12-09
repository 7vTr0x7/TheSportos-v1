import { createSlice } from "@reduxjs/toolkit";

const blogsSlice = createSlice({
  name: "blogs",
  initialState: {
    blogs: [],
  },
  reducers: {
    setBlogs: (state, action) => {
      return {
        ...state,
        blogs: action.payload,
      };
    },
  },
});

export const { setBlogs } = blogsSlice.actions;

export default blogsSlice.reducer;
