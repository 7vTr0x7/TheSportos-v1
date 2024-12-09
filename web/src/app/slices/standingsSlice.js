import { createSlice } from "@reduxjs/toolkit";

const standingsSlice = createSlice({
  name: "standings",
  initialState: {
    standings: [],
  },
  reducers: {
    setStandings: (state, action) => {
      return {
        ...state,
        standings: action.payload,
      };
    },
  },
});

export const { setStandings } = standingsSlice.actions;

export default standingsSlice.reducer;
