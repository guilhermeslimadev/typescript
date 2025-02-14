type MoviesProps = {
  title: string;
  releaseYear: number;
  [key: string | number]: string | number | boolean;
};

type Movies = {
  [key: string]: MoviesProps;
};

let movies = {
  movie1: {
    id: 1,
    title: 'Titanic',
    releaseYear: 1997,
    isFavorite: true,
    director: 'Christopher Nolan',
  },

  movie2: {
    id: 2,
    title: 'Avatar',
    releaseYear: 2009,
    isFavorite: false,
    director: 'Christopher Nolan',
  },
};

export function showMovies(movies: Movies) {
  console.log(movies);
}

showMovies(movies);
