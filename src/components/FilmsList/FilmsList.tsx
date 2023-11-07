import { useAppSelector } from "../../store/hooks";

const FilmsList = (): React.ReactElement => {
  const films = useAppSelector((state) => state.filmsState.films);

  return (
    <ul className="films">
      {films.map((film) => (
        <li className="film" key={film.id}>
          <h2 className="film__title">{film.title}</h2>
          <span className="film__year">{`Year: ${film.year}`}</span>
          <img
            src={film.image}
            alt={`${film.title}`}
            className="film__image"
            width={317}
            height={450}
          />
        </li>
      ))}
    </ul>
  );
};

export default FilmsList;
