import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesStateName } from './models/movies-state.models';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MoviesEffects } from './effects/movies.effects';
import { moviesReducers } from './reducers/movies.reducer';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		StoreModule.forFeature(MoviesStateName, moviesReducers),
		EffectsModule.forFeature([MoviesEffects])
	]
})
export class MoviesModule { }