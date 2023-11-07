import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { filmsReducer } from "./features/filmsSlice";

export const store = configureStore({
  reducer: {
    filmsState: filmsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
