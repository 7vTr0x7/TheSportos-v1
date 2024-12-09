import { createSlice } from "@reduxjs/toolkit";

const upcomingMatchSlice = createSlice({
  name: "upcomingMatch",
  initialState: {
    upcomingMatch: [],
  },
  reducers: {
    setUpcomingMatch: (state, action) => {
      return {
        ...state,
        upcomingMatch: action.payload,
      };
    },
  },
});

export const { setUpcomingMatch } = upcomingMatchSlice.actions;

export default upcomingMatchSlice.reducer;
