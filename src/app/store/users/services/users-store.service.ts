import { Injectable } from '@angular/core';
import { User, UsersState } from '../models';
import { select, Store } from '@ngrx/store';
import { requestUserMe } from '../actions';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { selectUserInfo } from '../selectors';

@Injectable({
	providedIn: 'root'
})

export class UsersStoreService {

	public get userMe$(): Observable<User> {
		return this.store.pipe(select(selectUserInfo), filter(Boolean)) as Observable<User>;
	}

	constructor(private store: Store<UsersState>) { }

	public requestUserMe(): void {
		this.store.dispatch(requestUserMe());
	}

}
