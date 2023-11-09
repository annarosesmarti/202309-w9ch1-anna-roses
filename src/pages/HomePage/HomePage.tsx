import { useDispatch } from "react-redux";
import { useEffect } from "react";
import useFilmsApi from "../../hooks/useFilmsApi";
import { loadFilmsActionCreator } from "../../store/features/films/filmsSlice";
import FilmsList from "../../components/FilmsList/FilmsList";
import HomePageStyled from "./HomePageStyled";

const HomePage = (): React.ReactElement => {
  const { getFilms } = useFilmsApi();
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const currentFilms = await getFilms();
      dispatch(loadFilmsActionCreator(currentFilms));
    })();
  }, [dispatch, getFilms]);

  return (
    <HomePageStyled>
      <header className="title-container">
        <h1 className="title">Harry Potter</h1>
        <span className="title__text">· The movies ·</span>
      </header>
      <FilmsList />
    </HomePageStyled>
  );
};

export default HomePage;
