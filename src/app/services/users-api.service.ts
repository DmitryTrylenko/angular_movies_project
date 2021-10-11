import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '@movies-models/interfaces';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class UsersApiService {

	constructor(private httpClient: HttpClient) { }

	getUserMe(): Observable<User> {
		return this.httpClient.get<User>('users/me');
	}
}
