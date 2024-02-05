/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CanvasState = {
  canvas: any;
  isSended: boolean;
  undoList: string[];
  redoList: string[];
};

const initialState: CanvasState = {
  canvas: document.createElement("canvas"),
  isSended: false,
  undoList: [],
  redoList: [],
};

export const canvasSlice = createSlice({
  name: "canvas",
  initialState,
  reducers: {
    setCanvas(state, action: PayloadAction<HTMLCanvasElement>) {
      state.canvas = action.payload;
    },
    setUndo(state, action: PayloadAction<string>) {
      state.undoList.push(action.payload);
    },
    setRedo(state, action: PayloadAction<string>) {
      state.redoList.push(action.payload);
    },
    changeIsSendedStatus(state, action: PayloadAction<boolean>) {
      state.isSended = action.payload;
    },
    undo(state) {
      if (state.undoList.length > 0) {
        const dataURL = state.undoList.pop();
        state.redoList.push(dataURL!);
      }
    },
    redo(state) {
      if (state.redoList.length > 0) {
        const dataURL = state.redoList.pop();
        state.undoList.push(dataURL!);
      }
    },
  },
});

export default canvasSlice.reducer;
