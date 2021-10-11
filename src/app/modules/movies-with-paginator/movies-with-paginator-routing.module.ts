import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesWithPaginatorComponent } from './movies-with-paginator.component';
const routes: Routes = [
	{
		path: '',
		component: MoviesWithPaginatorComponent
	}
];
@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class MoviesWithPaginatorRoutingModule { }