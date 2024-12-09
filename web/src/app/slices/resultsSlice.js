import { createSlice } from "@reduxjs/toolkit";

const resultsSlice = createSlice({
  name: "results",
  initialState: {
    results: [],
  },
  reducers: {
    setResults: (state, action) => {
      return {
        ...state,
        results: action.payload,
      };
    },
  },
});

export const { setResults } = resultsSlice.actions;

export default resultsSlice.reducer;
