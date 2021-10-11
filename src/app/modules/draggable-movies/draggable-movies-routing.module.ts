import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DraggableMoviesComponent } from './components/draggable-movies/draggable-movies.component';
const routes: Routes = [
 {
   path: '',
   component: DraggableMoviesComponent
 }
];
@NgModule({
 imports: [RouterModule.forChild(routes)],
 exports: [RouterModule]
})
export class DraggableMoviesRoutingModule { }