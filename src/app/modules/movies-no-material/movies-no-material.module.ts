import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesNoMaterialRoutingModule } from '@movies-movies-no-material/movies-no-material-routing.module';
import { MoviesNoMaterialComponent } from '@movies-movies-no-material/components/movies-no-material/movies-no-material.component';
import { SortByRatePipe } from '@movies-movies-no-material/pipes/sort-by-rate/sort-by-rate.pipe';
import { SharedModule } from '@movies-shared/shared.module';


@NgModule({
	declarations: [
		MoviesNoMaterialComponent,
		SortByRatePipe
	],
	imports: [
		CommonModule,
		MoviesNoMaterialRoutingModule,
		SharedModule
	]
})
export class MoviesNoMaterialModule { }