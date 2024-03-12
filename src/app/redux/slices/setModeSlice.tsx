import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ModeState } from "app/interfaces";

const initialState: ModeState = {
  mode: true,
};

const setModeSlice = createSlice({
  name: "colorMode",
  initialState,
  reducers: {
    setColorMode: (state, action) => {
      state.mode = action.payload;
    },
  },
});

export const { setColorMode } = setModeSlice.actions;

export default setModeSlice.reducer;
