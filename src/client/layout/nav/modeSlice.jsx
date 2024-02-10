import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: false,
  }
  const modeSlice = createSlice({
    name: "mode",
    initialState,
    reducers: {
      toggleMode: (state) => {
        state.mode = !state.mode;
      },
    },
  });
  
  export const { toggleMode } = modeSlice.actions;
  export default modeSlice.reducer;