import FilmForm from "../../components/FilmForm/FilmForm";
import AddFormPageStyled from "./AddFormPageStyled";

const AddFormPage = (): React.ReactElement => {
  return (
    <AddFormPageStyled>
      <header className="form-container">
        <h1 className="form-container__title">Add a film </h1>
      </header>
      <FilmForm />
    </AddFormPageStyled>
  );
};

export default AddFormPage;
