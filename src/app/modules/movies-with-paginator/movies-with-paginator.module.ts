import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesWithPaginatorRoutingModule } from './movies-with-paginator-routing.module';
import { MoviesWithPaginatorComponent } from './movies-with-paginator.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { SharedModule } from '@movies-shared/shared.module';
@NgModule({
	declarations: [
		MoviesWithPaginatorComponent
	],
	imports: [
		CommonModule,
		MoviesWithPaginatorRoutingModule,
		MatTableModule,
		MatPaginatorModule,
		SharedModule
	]
})
export class MoviesWithPaginatorModule { }