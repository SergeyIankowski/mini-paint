/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Tool from "../../tools/Tool";

const initialState = {
  tool: {
    fillColor: "",
    strokeColor: "",
    lineWidth: 1,
  },
};

export const toolSlice = createSlice({
  name: "currentDate",
  initialState,
  reducers: {
    setTool(state, action: PayloadAction<Tool>) {
      state.tool = action.payload;
    },
    setFillColor(state, action: PayloadAction<string>) {
      state.tool.fillColor = action.payload;
    },
    setStrokeColor(state, action: PayloadAction<string>) {
      state.tool.strokeColor = action.payload;
    },
    setLineWidth(state, action: PayloadAction<number>) {
      state.tool.lineWidth = action.payload;
    },
  },
});

export default toolSlice.reducer;
