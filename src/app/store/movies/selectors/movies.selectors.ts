import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { ListMovieModel, MovieModel, MoviesState, MoviesStateName } from '../models';

export const selectMoviesState = createFeatureSelector<MoviesState>(MoviesStateName);

export const selectMovies: MemoizedSelector<MoviesState, ListMovieModel[] | undefined> = createSelector(
	selectMoviesState,
	(moviesState: MoviesState): ListMovieModel[] | undefined => moviesState.moviesList
);

export const selectMovieInfo: MemoizedSelector<MoviesState, MovieModel | undefined> = createSelector(
	selectMoviesState,
	(moviesState: MoviesState): MovieModel | undefined => moviesState.movieInfo
);