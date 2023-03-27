/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  canvas: {},
};

export const canvasSlice = createSlice({
  name: "currentDate",
  initialState,
  reducers: {
    setCanvas(state, action: PayloadAction<HTMLElement>) {
      state.canvas = action.payload;
    },
  },
});

export default canvasSlice.reducer;
