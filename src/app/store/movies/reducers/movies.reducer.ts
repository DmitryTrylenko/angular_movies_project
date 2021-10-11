import { ActionReducerMap } from '@ngrx/store';
import { MoviesState } from '../models';
import { moviesListReducer } from './movies-list.reducer';
import { movieInfoReducer } from './movies-info.reducer';

export const moviesReducers: ActionReducerMap<MoviesState> = {
	moviesList: moviesListReducer,
	movieInfo: movieInfoReducer
};