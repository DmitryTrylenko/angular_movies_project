import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { User, UsersState, UsersStateName } from '../models';

export const selectUsersState = createFeatureSelector<UsersState>(UsersStateName);

export const selectUserInfo: MemoizedSelector<UsersState, User | undefined> = createSelector(
	selectUsersState,
	(userState: UsersState): User | undefined => userState.userInfo
);