export interface FilmsStructure {
  id: number;
  title: string;
  year: string;
  image: string;
  isWatched: boolean;
}

export interface FilmsStateStructure {
  films: FilmsStructure[];
}
