import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UsersApiService } from '@movies-services/users-api.service';
import { requestUserMe, requestUserMeFailure, requestUserMeSuccess } from '../actions';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { User } from '../models';
import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable()
export class UsersEffects {

	public requestUsers$ = createEffect(() => this.actions$
		.pipe(
			ofType(requestUserMe),
			exhaustMap(() =>
				this.usersApiService.getUserMe()
					.pipe(
						map((user: User) => requestUserMeSuccess({ user })),
						catchError((error: HttpErrorResponse) => of(requestUserMeFailure({ error })))
					)
			)
		)
	);

	constructor(private actions$: Actions, private usersApiService: UsersApiService) { }
}
