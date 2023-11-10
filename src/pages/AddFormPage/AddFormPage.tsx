import FilmForm from "../../components/FilmForm/FilmForm";
import NavMenu from "../../components/NavMenu/NavMenu";
import AddFormPageStyled from "./AddFormPageStyled";

const AddFormPage = (): React.ReactElement => {
  return (
    <AddFormPageStyled>
      <header className="form-container">
        <h1 className="form-container__title">Add a film </h1>
      </header>
      <NavMenu />
      <FilmForm />
    </AddFormPageStyled>
  );
};

export default AddFormPage;
