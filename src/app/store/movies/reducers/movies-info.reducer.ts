import { MovieModel } from '../models';
import { Action, createReducer, on } from '@ngrx/store';
import { editMovieSuccess, requestMovieById, requestMovieByIdSuccess } from '../actions';

const reducer = createReducer<MovieModel | undefined>(
	undefined,
	on(requestMovieById, () => undefined),
	on(requestMovieByIdSuccess, (state, { movie }) => movie),
	on(editMovieSuccess, (state, { movie }) => movie)
);

export function movieInfoReducer(state: MovieModel | undefined, action: Action) {
	return reducer(state, action);
}
