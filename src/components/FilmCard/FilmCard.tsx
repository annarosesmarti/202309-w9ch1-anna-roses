import { FilmsStructure } from "../../store/types";
import FilmCardStyled from "./FilmCardStyled";

interface FilmsProps {
  film: FilmsStructure;
}

const FilmCard = ({ film }: FilmsProps): React.ReactElement => {
  return (
    <FilmCardStyled>
      <h2 className="film__title">{film.title}</h2>
      <span className="film__year">{`Year: ${film.year}`}</span>
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
