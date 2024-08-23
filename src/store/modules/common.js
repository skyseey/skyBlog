import { createSlice } from "@reduxjs/toolkit";

const commonSlice = createSlice({
  name: "common",
  initialState: {
    globalTheme: true,
  },
  reducers: {
    updateGlobalTheme(state, payload) {
      state.globalTheme = payload;
    },
  },
});

export default commonSlice.reducer;
