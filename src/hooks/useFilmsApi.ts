import { useCallback } from "react";
import { FilmsStructure } from "../store/types";

const useFilmsApi = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const getFilms = useCallback(async (): Promise<FilmsStructure[]> => {
    const response = await fetch(`${apiUrl}/films`);
    const films = (await response.json()) as FilmsStructure[];

    return films;
  }, [apiUrl]);

  const setWatchStatus = useCallback(
    async (filmId: number, isWatched: boolean): Promise<boolean> => {
      const response = await fetch(`${apiUrl}/films/${filmId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ isWatched: !isWatched }),
      });

      if (!response.ok) {
        throw new Error("Error on changing film's watch status");
      }

      return isWatched;
    },
    [apiUrl],
  );

  return { getFilms, setWatchStatus };
};

export default useFilmsApi;
