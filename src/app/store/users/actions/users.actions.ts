import { createAction, props } from '@ngrx/store';
import { User } from '../models';
import { HttpErrorResponse } from '@angular/common/http';

export const usersActionTypes = {
	requestUserMe: '[Users] Request user me',
	requestUserMeSuccess: '[Users] Request user me Success',
	requestUserMeFailure: '[Users] Request user me Failure'
};

export const requestUserMe = createAction(
	usersActionTypes.requestUserMe
);

export const requestUserMeSuccess = createAction(
	usersActionTypes.requestUserMeSuccess,
	props<{ user: User }>()
);

export const requestUserMeFailure = createAction(
	usersActionTypes.requestUserMeFailure,
	props<{ error: HttpErrorResponse }>()
);