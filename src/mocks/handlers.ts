import { http, HttpResponse } from "msw";
import mockFilms from "./mockData";

const urlApi = import.meta.env.VITE_API_URL;

export const handlers = [
  http.get(urlApi, () => {
    return HttpResponse.json(mockFilms);
  }),
];
