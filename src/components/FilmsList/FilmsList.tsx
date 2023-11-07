import { useAppSelector } from "../../store/hooks";
import FilmCard from "../FilmCard/FilmCard";
import FilmsListStyled from "./FilmsListStyled";

const FilmsList = (): React.ReactElement => {
  const films = useAppSelector((state) => state.filmsState.films);

  return (
    <FilmsListStyled>
      {films.map((film) => (
        <li className="film-container" key={film.id}>
          <FilmCard film={film} />
        </li>
      ))}
    </FilmsListStyled>
  );
};

export default FilmsList;
