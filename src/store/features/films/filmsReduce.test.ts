import { filmsReducer, toggleWatchedFilmActionCreator } from "./filmsSlice";
import { FilmsStateStructure } from "../../types";
import mockFilms from "../../../mocks/mockData";

describe("Given a FilmCardReducer reducer", () => {
  describe("When it receives a not Watched Harry Potter and the Sorcerer's Stone and Harry Potter and the Chamber of Secrets", () => {
    test("Then it should return a not watched Harry Potter and the Sorcerer's Stone and a watched Harry Potter and the Chamber of Secrets", () => {
      const currentFilmsState: FilmsStateStructure = {
        films: mockFilms,
      };

      const idToToggle = currentFilmsState.films[1].id;
      const expectIsWatchedToggled = !currentFilmsState.films[1].isWatched;

      const newFilmsState = filmsReducer(
        currentFilmsState,
        toggleWatchedFilmActionCreator(idToToggle),
      );

      const isWatchedToggled = newFilmsState.films[1].isWatched;

      expect(expectIsWatchedToggled).toStrictEqual(isWatchedToggled);
    });
  });
});
