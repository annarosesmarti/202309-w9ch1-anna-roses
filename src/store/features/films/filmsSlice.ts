import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FilmsStructure, FilmsStateStructure } from "../../types";

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
    addFilm: (
      currentState,
      action: PayloadAction<FilmsStructure>,
    ): FilmsStateStructure => ({
      ...currentState,
      films: currentState.films.splice(
        currentState.films.length - 1,
        0,
        action.payload,
      ),
    }),
  },
});

export const {
  loadFilms: loadFilmsActionCreator,
  toggleWatchFilm: toggleWatchedFilmActionCreator,
  addFilm: addFilmActionCreator,
} = filmsSlice.actions;

export const filmsReducer = filmsSlice.reducer;
