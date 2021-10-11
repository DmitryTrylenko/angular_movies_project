import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DraggableMoviesRoutingModule } from './draggable-movies-routing.module';
import { DraggableMoviesComponent } from './components/draggable-movies/draggable-movies.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from '@movies-shared/shared.module';

@NgModule({
	declarations: [
		DraggableMoviesComponent
	],
	imports: [
		CommonModule,
		DraggableMoviesRoutingModule,
		DragDropModule,
		MatCardModule,
		SharedModule
	]
})
export class DraggableMoviesModule { }