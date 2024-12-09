import { createSlice } from "@reduxjs/toolkit";

const playersSlice = createSlice({
  name: "players",
  initialState: {
    players: [],
  },
  reducers: {
    setPlayers: (state, action) => {
      return {
        ...state,
        players: action.payload,
      };
    },
  },
});

export const { setPlayers } = playersSlice.actions;

export default playersSlice.reducer;
