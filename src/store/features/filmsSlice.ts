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

    toggleWatchFilm: (
      currentState,
      action: PayloadAction<number>,
    ): FilmsStateStructure => ({
      ...currentState,
      films: currentState.films.map((film) => ({
        ...film,
        isWatched:
          film.id === action.payload ? !film.isWatched : film.isWatched,
      })),
    }),
  },
});

export const {
  loadFilms: loadFilmsActionCreator,
  toggleWatchFilm: toggleWatchedFilmActionCreator,
} = filmsSlice.actions;

export const filmsReducer = filmsSlice.reducer;
