import { createSlice } from "@reduxjs/toolkit";

const leaguesSlice = createSlice({
  name: "leagues",
  initialState: {
    leagues: [],
  },
  reducers: {
    setLeagues: (state, action) => {
      return {
        ...state,
        leagues: action.payload,
      };
    },
  },
});

export const { setLeagues } = leaguesSlice.actions;

export default leaguesSlice.reducer;
