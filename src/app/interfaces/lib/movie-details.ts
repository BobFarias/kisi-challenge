export interface IDetailedMovieList {
  rank: number;
  title: string;
  thumbnail: string;
  rating: string;
  id: string;
  year: number;
  image: string;
  description: string;
  trailer: string;
  genre: string;
  director: string;
  writers: string;
  imdbid: string;
}

export type IPageMovies = Record<number, IDetailedMovieList[]>;
