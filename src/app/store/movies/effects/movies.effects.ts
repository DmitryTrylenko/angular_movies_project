import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { addMovie, addMovieFailure, addMovieSuccess, editMovie, editMovieFailure, editMovieSuccess,
	removeAllMovies, removeAllMoviesFailure, removeAllMoviesSuccess, removeMovie, removeMovieFailure,
	removeMovieSuccess, requestMovieById, requestMovieByIdFailure, requestMovieByIdSuccess,
	requestMovies, requestMoviesFailure, requestMoviesSuccess } from '../actions';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { MoviesApiService } from '../services/movies-api.service';
import { ListMovieModel } from '@movies-models/interfaces';
import { MovieModel } from '../models/movies-state.models';
import { ActivatedRoute, Router } from '@angular/router';
@Injectable()
export class MoviesEffects {
	public requestMovieById$ = createEffect(() => this.actions$
		.pipe(
			ofType(requestMovieById),
			exhaustMap(({ id }) =>
				this.moviesApiService.requestMovieById(id)
					.pipe(
						map(movie => requestMovieByIdSuccess({ movie })),
						catchError((error: HttpErrorResponse) => of(requestMovieByIdFailure({ error })))
					)
			)
		)
	);
	public editMovie$ = createEffect(() => this.actions$
		.pipe(
			ofType(editMovie),
			exhaustMap(({ id, movie }) =>
				this.moviesApiService.editMovie(id, movie)
					.pipe(
						map(editedMovie => editMovieSuccess({ movie: editedMovie })),
						catchError((error: HttpErrorResponse) => of(editMovieFailure({ error })))
					)
			)
		)
	);
	public requestMovieByIdFailure$ = createEffect(() => this.actions$
		.pipe(
			ofType(requestMovieByIdFailure),
			tap(() => this.router.navigate(['/movies']))
		),
		{ dispatch: false }
	);
	public removeMovieSuccess = createEffect(() => this.actions$
		.pipe(
			ofType(removeMovieSuccess),
			tap(() => this.router.navigate(['/movies']))
		),
		{ dispatch: false }
	);
	constructor(private actions$: Actions, private moviesApiService: MoviesApiService,
		private activatedRoute: ActivatedRoute, private router: Router) { }
}

