import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersModule } from './users/users.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { metaReducers, reducers } from './root-state.reducer';
import { MoviesModule } from './movies/movies.module';


@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		UsersModule,
		MoviesModule,
		StoreModule.forRoot(reducers, { metaReducers }),
		EffectsModule.forRoot([])
	]
})
export class RootStoreModule { }