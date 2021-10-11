import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ConfirmationDialogComponent } from '@movies-shared/components/confirmation-dialog/confirmation-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { TitleFormatterPipe } from '@movies-shared/pipes/title-formatter/title-formatter.pipe';
import { CreateMovieComponent } from '@movies-movies/components/create-movie/create-movie.component';
import { ListMovieModel, MovieModel } from '@movies-models/interfaces';
import { Router } from '@angular/router';
import { MoviesStoreService } from '../../../../store/movies/services/movies-store.service';
@Component({
	selector: 'movies-movies',
	templateUrl: './movies.component.html',
	styleUrls: ['./movies.component.scss'],
	providers: [TitleFormatterPipe]
})
export class MoviesComponent implements OnInit {
	movies: ListMovieModel[] = [];
	displayedColumns = ['title', 'rate', 'actions'];
	dataSource = new MatTableDataSource(this.movies);
	@ViewChild(MatSort) sort!: MatSort;
	constructor(private router: Router, private dialog: MatDialog, private formatter: TitleFormatterPipe,
		private moviesStoreService: MoviesStoreService) {
		this.moviesStoreService.requestMovies();
	}
	ngOnInit() {
		this.moviesStoreService.movies$.subscribe(movies => this.updateList(movies));
	}
	applyFilter(event: Event) {
		const filterValue = (event.target as HTMLInputElement).value;
		this.dataSource.filter = filterValue.trim().toLowerCase();
	}
	removeAllMovies() {
		const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
			width: '500px',
			disableClose: true,
			data: { title: 'Movies removing', description: `Are you sure you want to remove all ${this.movies.length} movies?` }
		});
		dialogRef.afterClosed().subscribe((isConfirmed: boolean) => {
			if (isConfirmed) { this.moviesStoreService.removeAllMovies(); }
		});
	}
	removeItem(movie: ListMovieModel) {
		const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
			width: '500px',
			disableClose: true,
			data: { title: 'Movie removing', description: `Are you sure you want to remove ${this.formatter.transform(movie.title)}?` }
		});
		dialogRef.afterClosed().subscribe((isConfirmed: boolean) => {
			if (isConfirmed) { this.moviesStoreService.removeMovie(movie.id); }
		});
	}
	addNewMovie() {
		const dialogRef = this.dialog.open(CreateMovieComponent, {
			width: '500px',
			autoFocus: true,
			disableClose: true,
			data: { title: 'Create new movie' }
		});
		dialogRef.afterClosed().subscribe((movie?: Omit<MovieModel, 'id'>) => {
			if (movie) { this.moviesStoreService.addMovie(movie); }
		});
	}
	goToItem(movie: ListMovieModel): void {
		this.router.navigate([this.router.url, movie.id]);
	}
	private updateList(movies: ListMovieModel[]): void {
		this.dataSource.data = this.movies = movies;
		this.dataSource.sort = this.sort;
	}
}
