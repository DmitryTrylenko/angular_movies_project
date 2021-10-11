import { Component } from '@angular/core';
import { ListMovieModel } from '@movies-models/interfaces';

@Component({
	selector: 'app-movies-no-material',
	templateUrl: './movies-no-material.component.html',
	styleUrls: ['./movies-no-material.component.scss']
})
export class MoviesNoMaterialComponent {

	public movies: ListMovieModel[] = [
		{
			id: '123db',
			title: 'Batman & 12',
			rate: 9.88
		},
		{
			id: '12db1',
			title: 'Superman!!',
			rate: 10
		},
		{
			id: '1db21',
			title: 'Capitan* America',
			rate: 7.1
		}
	];

	constructor() { }

	trackById(index: number, movie: ListMovieModel): string {
		return movie.id;
	}

	removeAllMovies() {
		this.movies = [];
	}

	removeItem(movie: ListMovieModel) {
		this.movies = this.movies.filter((item: ListMovieModel) => item.id !== movie.id);
	}

}
