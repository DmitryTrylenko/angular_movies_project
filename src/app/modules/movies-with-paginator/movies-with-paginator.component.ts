import { Component, OnInit } from '@angular/core';
import { ListMovieModel, Paginator } from '@movies-models/interfaces';
import { MatTableDataSource } from '@angular/material/table';
import { MoviesApiService } from '@movies-services/movies/movies-api.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
	selector: 'movies-movies-with-paginator',
	templateUrl: './movies-with-paginator.component.html',
	styleUrls: ['./movies-with-paginator.scss']
})
export class MoviesWithPaginatorComponent implements OnInit {

	public movies: ListMovieModel[] = [];
	public length!: number;
	public pageSizeOptions = [5, 10];
	public limit = 5;

	displayedColumns = ['title', 'rate'];
	dataSource = new MatTableDataSource(this.movies);

	constructor(
		private moviesApiService: MoviesApiService
	) { }

	ngOnInit() {
		this.moviesApiService.requestPaginatedMovies().subscribe(
			paginator => this.updateList(paginator)
		);
	}

	goToPage(pageEvent: PageEvent) {
		const { pageIndex, pageSize } = pageEvent;
		this.moviesApiService.requestPaginatedMovies(pageIndex, pageSize).subscribe(
			paginator => this.updateList(paginator)
		);
	}


	private updateList(paginator: Paginator<ListMovieModel>): void {
		this.dataSource.data = this.movies = paginator.items;
		this.length = paginator.length;
	}

}
