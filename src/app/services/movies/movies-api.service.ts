import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListMovieModel, MovieModel, Paginator } from '@movies-models/interfaces';

@Injectable({
	providedIn: 'root'
})
export class MoviesApiService {

	constructor(private httpClient: HttpClient) { }

	requestMovies(): Observable<ListMovieModel[]> {
		return this.httpClient.get<ListMovieModel[]>('movies/view/all');
	}

	requestMovieById(id: string): Observable<MovieModel> {
		return this.httpClient.get<MovieModel>(`movies/${id}`);
	}

	removeMovie(id: string): Observable<{ id: string }> {
		return this.httpClient.delete<{ id: string }>(`movies/${id}`);
	}

	addMovie(newMovie: Omit<MovieModel, 'id'>): Observable<MovieModel> {
		return this.httpClient.post<MovieModel>('movies', newMovie);
	}

	removeAllMovies(): Observable<ListMovieModel[]> {
		return this.httpClient.delete<ListMovieModel[]>('movies/remove/all');
	}

	editMovie(id: string, moviePatch: Partial<MovieModel>): Observable<MovieModel> {
		return this.httpClient.patch<MovieModel>(`movies/${id}`, moviePatch);
	}

	requestPaginatedMovies(pageIndex: number = 0, pageSize: number = 5): Observable<Paginator<MovieModel>> {
		const params = { pageIndex, pageSize };
		return this.httpClient.get<Paginator<MovieModel>>('movies', { params });
	}

}
