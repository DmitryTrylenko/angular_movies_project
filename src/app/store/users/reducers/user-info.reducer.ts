import { User } from '../models';
import { Action, createReducer, on } from '@ngrx/store';
import { requestUserMe, requestUserMeSuccess } from '../actions';

const reducer = createReducer<User | undefined>(
	undefined,
	on(requestUserMe, () => undefined),
	on(requestUserMeSuccess, (state, { user }) => user)
);

export function userInfoReducer(state: User | undefined, action: Action) {
	return reducer(state, action);
}
