import { useAppSelector } from "../../store/hooks";
import FilmCard from "../FilmCard/FilmCard";

const FilmsList = (): React.ReactElement => {
  const films = useAppSelector((state) => state.filmsState.films);

  return (
    <ul className="films">
      {films.map((film) => (
        <li className="film-container" key={film.id}>
          <FilmCard film={film} />
        </li>
      ))}
    </ul>
  );
};

export default FilmsList;
