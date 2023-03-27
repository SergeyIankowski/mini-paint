/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  tool: {},
};

export const toolSlice = createSlice({
  name: "currentDate",
  initialState,
  reducers: {
    setTool(state, action: PayloadAction<string>) {
      state.tool = action.payload;
    },
  },
});

export default toolSlice.reducer;
