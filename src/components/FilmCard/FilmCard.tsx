import { useDispatch } from "react-redux";
import { FilmsStructure } from "../../store/types";
import FilmCardStyled from "./FilmCardStyled";
import { useCallback } from "react";
import { toggleWatchedFilmActionCreator } from "../../store/features/films/filmsSlice";
import useFilmsApi from "../../hooks/useFilmsApi";

interface FilmsProps {
  film: FilmsStructure;
}

const FilmCard = ({ film }: FilmsProps): React.ReactElement => {
  const dispatch = useDispatch();

  const { setWatchStatus } = useFilmsApi();

  const changeWatchStatus = useCallback(() => {
    setWatchStatus(film.id, film.isWatched);
    dispatch(toggleWatchedFilmActionCreator(film.id));
  }, [dispatch, film.id, film.isWatched, setWatchStatus]);

  return (
    <FilmCardStyled>
      <h2 className="film__title">{film.title}</h2>
      <span className="film__year">{`Year: ${film.year}`}</span>
      <label className="film__label">
        Watched
        <input
          className="film__checkbox"
          type="checkbox"
          checked={film.isWatched}
          onChange={changeWatchStatus}
        />
      </label>
      <img
        src={film.image}
        alt={`${film.title}`}
        className="film__image"
        width={317}
        height={450}
      />
    </FilmCardStyled>
  );
};

export default FilmCard;
