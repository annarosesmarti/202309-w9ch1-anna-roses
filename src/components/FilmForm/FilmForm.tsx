import Button from "../Button/Button";
import FilmFormStyled from "./FilmFormStyled";

const FilmForm = (): React.ReactElement => {
  return (
    <FilmFormStyled className="form" autoComplete="off">
      <div className="form__container">
        <label htmlFor="name" className="form__label">
          Title
        </label>
        <input type="text" id="name" className="form__input" required />
      </div>
      <div className="form__container">
        <label htmlFor="year" className="form__label">
          Production year
        </label>
        <input type="number" id="year" className="form__input" required />
      </div>
      <div className="form__container">
        <label htmlFor="image" className="form__label">
          Image URL
        </label>
        <input type="url" id="image" className="form__input" required />
      </div>
      <div className="form__watched">
        <label htmlFor="checkbox" className="form__label">
          Have you seen the film?
        </label>
        <input type="checkbox" id="checkbox" className="form__label" required />
      </div>
      <Button buttonText={"Send"} buttonColor="button__black" />
    </FilmFormStyled>
  );
};

export default FilmForm;
