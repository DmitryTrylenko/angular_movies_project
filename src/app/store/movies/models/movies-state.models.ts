export const MoviesStateName = 'movies';

export interface MoviesState {
	moviesList: ListMovieModel[] | undefined;
	movieInfo: MovieModel | undefined;
}

export interface ListMovieModel {
	id: string;
	title: string;
	rate: number;
}

export interface MovieModel extends ListMovieModel {
	description: string;
}
