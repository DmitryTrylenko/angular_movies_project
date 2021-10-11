import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { tap } from 'rxjs/operators';
import { ListMovieModel } from '@movies-models/interfaces';
import { MoviesApiService } from '@movies-services/movies/movies-api.service';
@Component({
	selector: 'movies-draggable-movies',
	templateUrl: './draggable-movies.component.html',
	styleUrls: ['./draggable-movies.component.scss']
})
export class DraggableMoviesComponent {
	todo: ListMovieModel[] = [];
	done: ListMovieModel[] = [];

	movies$ = this.moviesApiService.requestMovies().pipe(
		tap(movies => this.todo = [...movies])
	);

	constructor(private moviesApiService: MoviesApiService) { }
	drop(event: CdkDragDrop<ListMovieModel[]>) {
		if (event.previousContainer === event.container) {
			moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
		} else {
			transferArrayItem(event.previousContainer.data,
				event.container.data,
				event.previousIndex,
				event.currentIndex);
		}
	}
	removeFromTodo(movie: ListMovieModel) {
		this.todo = this.todo.filter(item => item.id !== movie.id);
	}
	removeFromDone(movie: ListMovieModel) {
		this.done = this.done.filter(item => item.id !== movie.id);
	}
}
