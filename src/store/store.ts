import { combineReducers, configureStore } from "@reduxjs/toolkit";
import canvasSliceReducer from "./reducers/canvasSlice";
import toolSliceReducer from "./reducers/toolSlice";

const rootReducer = combineReducers({
  tool: toolSliceReducer,
  canvas: canvasSliceReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
