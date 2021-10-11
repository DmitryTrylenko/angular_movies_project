import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ListMovieModel, MovieModel } from '@movies-models/interfaces';
import { MoviesState, PaginationOptions } from '../models';
import {
	addMovie, editMovie, removeAllMovies, removeMovie, requestMovieById, requestMovies,
	requestPaginatedMovies, updatePageParams
} from '../actions';
import {
	selectItemsLenght, selectMovieInfo, selectMovies, selectPageItems, selectPageParams
} from '../selectors';
import { filter } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})

export class MoviesStoreService {

	public get movies$(): Observable<ListMovieModel[]> {
		return this.store.pipe(select(selectMovies), filter(Boolean)) as Observable<ListMovieModel[]>;
	}

	public get movie$(): Observable<MovieModel> {
		return this.store.pipe(select(selectMovieInfo), filter(Boolean)) as Observable<MovieModel>;
	}

	constructor(private store: Store<MoviesState>) { }

	public requestMovies(): void {
		this.store.dispatch(requestMovies())
	}

	public removeAllMovies(): void {
		this.store.dispatch(removeAllMovies());
	}

	public removeMovie(id: string): void {
		this.store.dispatch(removeMovie({ id }));
	}

	public addMovie(movie: Omit<MovieModel, 'id'>): void {
		this.store.dispatch(addMovie({ movie }));
	}

	public requestMovieById(id: string): void {
		this.store.dispatch(requestMovieById({ id }));
	}

	public editMovie(id: string, moviePatch: Partial<MovieModel>): void {
		this.store.dispatch(editMovie({ id, movie: moviePatch }));
	}

}
