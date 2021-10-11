import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from '@movies-movies/movies-routing.module';
import { MoviesComponent } from '@movies-movies/components/movies/movies.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from '@movies-shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateMovieComponent } from '@movies-movies/components/create-movie/create-movie.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';


@NgModule({
	declarations: [
		MoviesComponent,
		CreateMovieComponent,
  MovieDetailsComponent
	],
	imports: [
		CommonModule,
		MoviesRoutingModule,
		MatTableModule,
		MatSortModule,
		MatInputModule,
		FormsModule,
		ReactiveFormsModule,
		SharedModule
	]
})
export class MoviesModule { }