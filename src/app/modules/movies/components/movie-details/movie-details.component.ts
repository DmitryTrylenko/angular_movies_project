import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListMovieModel, MovieModel } from '@movies-models/interfaces';
import { Subscription } from 'rxjs';
import { ConfirmationDialogComponent } from '@movies-shared/components/confirmation-dialog/confirmation-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { CreateMovieComponent } from '@movies-movies/components/create-movie/create-movie.component';
import { MoviesStoreService } from '../../../../store/movies/services/movies-store.service';
import { tap } from 'rxjs/operators';
@Component({
	selector: 'movies-movie-details',
	templateUrl: './movie-details.component.html',
	styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit, OnDestroy {
	movie!: MovieModel;
	movie$ = this.moviesStoreService.movie$.pipe(tap(movie => this.movie = movie));
	routerSubscription!: Subscription;
	constructor(
		private activatedRoute: ActivatedRoute,
		private router: Router,
		private moviesStoreService: MoviesStoreService,
		private dialog: MatDialog
	) { }
	ngOnInit(): void {
		this.routerSubscription = this.activatedRoute.params.subscribe(params => {
			this.moviesStoreService.requestMovieById(params.id);
		});
	}
	ngOnDestroy() {
		this.routerSubscription.unsubscribe();
	}
	edit() {
		const dialogRef = this.dialog.open(CreateMovieComponent, {
			width: '500px',
			autoFocus: true,
			disableClose: true,
			data: { title: 'Update movie', movie: this.movie }
		});
		dialogRef.afterClosed().subscribe((movie?: Partial<ListMovieModel>) => {
			if (movie) {
				this.moviesStoreService.editMovie(this.movie.id, movie);
			}
		});
	}
	remove() {
		const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
			width: '500px',
			disableClose: true,
			data: { title: 'Movie removing', description: `Are you sure you want to remove current movie?` }
		});
		dialogRef.afterClosed().subscribe((isConfirmed: boolean) => {
			if (isConfirmed) {
				this.moviesStoreService.removeMovie(this.movie.id);
			}
		});
	}

}
