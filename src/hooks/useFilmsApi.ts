import { useCallback } from "react";
import { FilmsStructure } from "../store/types";

const useFilmsApi = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const getFilms = useCallback(async () => {
    const response = await fetch(`${apiUrl}/films`);
    const films = (await response.json()) as FilmsStructure[];

    return films;
  }, [apiUrl]);

  return { getFilms };
};

export default useFilmsApi;
