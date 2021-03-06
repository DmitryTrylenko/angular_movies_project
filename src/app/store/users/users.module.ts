import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UsersStateName } from './models';
import { usersReducers } from './reducers';
import { UsersEffects } from './effects';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		StoreModule.forFeature(UsersStateName, usersReducers),
		EffectsModule.forFeature([UsersEffects])
	]
})
export class UsersModule { }