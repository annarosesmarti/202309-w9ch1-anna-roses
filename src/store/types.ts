export interface FilmsStructure {
  id: number;
  title: string;
  year: string;
}

export interface FilmsStateStructure {
  films: FilmsStructure[];
}
