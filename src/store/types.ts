export interface FilmsStructure {
  id: number;
  title: string;
  year: string;
  image: string;
}

export interface FilmsStateStructure {
  films: FilmsStructure[];
}
