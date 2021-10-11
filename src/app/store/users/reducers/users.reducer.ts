import { ActionReducerMap } from '@ngrx/store';
import { UsersState } from '../models';
import { userInfoReducer } from './user-info.reducer';

export const usersReducers: ActionReducerMap<UsersState> = {
	userInfo: userInfoReducer
};