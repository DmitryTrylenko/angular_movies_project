import { ListMovieModel } from '../models/movies-state.models';
import { Action, createReducer, on } from '@ngrx/store';
import {
	addMovieSuccess,
	removeAllMoviesSuccess,
	removeMovieSuccess,
	requestMovies,
	requestMoviesSuccess
} from '../actions/movies.actions';

const reducer = createReducer<ListMovieModel[] | undefined>(
	undefined,
	on(requestMovies, () => undefined),
	on(requestMoviesSuccess, (state, { movies }) => movies),
	on(removeAllMoviesSuccess, (state, { movies }) => movies),
	on(removeMovieSuccess, (state, { id }) => state ? [...state.filter(item => item.id !== id)] : undefined),
	on(addMovieSuccess, (state, { movie }) => state ? [...state, movie] : [movie])
);

export function moviesListReducer(state: ListMovieModel[] | undefined, action: Action) {
	return reducer(state, action);
}
