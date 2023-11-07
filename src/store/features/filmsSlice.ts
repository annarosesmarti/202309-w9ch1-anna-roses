import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FilmsStructure, FilmsStateStructure } from "../types";

const initialFilmsState: FilmsStateStructure = {
  films: [],
};

const filmsSlice = createSlice({
  name: "films",
  initialState: initialFilmsState,
  reducers: {
    loadFilms: (
      currentState,
      action: PayloadAction<FilmsStructure[]>,
    ): FilmsStateStructure => ({
      ...currentState,
      films: action.payload,
    }),
  },
});

export const { loadFilms: loadFilmsActionCreator } = filmsSlice.actions;

export const filmsReducer = filmsSlice.reducer;
