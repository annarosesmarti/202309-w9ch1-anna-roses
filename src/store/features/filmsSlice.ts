import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FilmsStructure, FilmsStateStructure } from "../types";

const initialFilmsState: FilmsStateStructure = {
  films: [],
};

export const filmsSlice = createSlice({
  name: "films",
  initialState: initialFilmsState,
  reducers: {
    loadFilms: (
      currentState: FilmsStateStructure,
      action: PayloadAction<FilmsStructure[]>,
    ): FilmsStateStructure => {
      return {
        ...currentState,
        films: action.payload,
      };
    },
  },
});

export const { loadFilms: loadCharactersActionCreator } = filmsSlice.actions;

export default filmsSlice.reducer;
