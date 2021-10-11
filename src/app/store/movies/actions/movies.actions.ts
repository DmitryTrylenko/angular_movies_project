import { createAction, props } from '@ngrx/store';
import { getFailureType, getSuccessType } from '../../utils/store-actions.helper';
import { HttpErrorResponse } from '@angular/common/http';
import { ListMovieModel, MovieModel } from '../models';
import { Paginator } from '@movies-models/interfaces';
export const moviesActionTypes = {
	requestMovies: '[Movies] Request movies',
	removeAllMovies: '[Movies] Remove all movies',
	removeMovie: '[Movies] Remove movie',
	addMovie: '[Movies] Add movie',
	requestMovieById: '[Movies] Request movie by id',
	editMovie: '[Movies] Edit movie'
};
export const requestMovies = createAction(moviesActionTypes.requestMovies);
export const requestMoviesSuccess = createAction(
	getSuccessType(moviesActionTypes.requestMovies),
	props<{ movies: ListMovieModel[] }>()
);
export const requestMoviesFailure = createAction(
	getFailureType(moviesActionTypes.requestMovies),
	props<{ error: HttpErrorResponse }>()
);
export const removeAllMovies = createAction(moviesActionTypes.removeAllMovies);
export const removeAllMoviesSuccess = createAction(
	getSuccessType(moviesActionTypes.removeAllMovies),
	props<{ movies: ListMovieModel[] }>()
);
export const removeAllMoviesFailure = createAction(
	getFailureType(moviesActionTypes.removeAllMovies),
	props<{ error: HttpErrorResponse }>()
);
export const removeMovie = createAction(moviesActionTypes.removeMovie, props<{ id: string }>());
export const removeMovieSuccess = createAction(
	getSuccessType(moviesActionTypes.removeMovie),
	props<{ id: string }>()
);
export const removeMovieFailure = createAction(
	getFailureType(moviesActionTypes.removeMovie),
	props<{ error: HttpErrorResponse }>()
);
export const addMovie = createAction(
	moviesActionTypes.addMovie,
	props<{ movie: Omit<ListMovieModel, 'id'> }>()
);
export const addMovieSuccess = createAction(
	getSuccessType(moviesActionTypes.addMovie),
	props<{ movie: MovieModel }>()
);
export const addMovieFailure = createAction(
	getFailureType(moviesActionTypes.addMovie),
	props<{ error: HttpErrorResponse }>()
);
export const requestMovieById = createAction(
	moviesActionTypes.requestMovieById,
	props<{ id: string }>()
);
export const requestMovieByIdSuccess = createAction(
	getSuccessType(moviesActionTypes.requestMovieById),
	props<{ movie: MovieModel }>()
);
export const requestMovieByIdFailure = createAction(
	getFailureType(moviesActionTypes.requestMovieById),
	props<{ error: HttpErrorResponse }>()
);
export const editMovie = createAction(
	moviesActionTypes.editMovie,
	props<{ id: string, movie: Partial<MovieModel> }>()
);
export const editMovieSuccess = createAction(
	getSuccessType(moviesActionTypes.editMovie),
	props<{ movie: MovieModel }>()
);
export const editMovieFailure = createAction(
	getFailureType(moviesActionTypes.editMovie),
	props<{ error: HttpErrorResponse }>()
);