import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesNoMaterialComponent } from '@movies-movies-no-material/components/movies-no-material/movies-no-material.component'

const routes: Routes = [
	{
		path: '',
		component: MoviesNoMaterialComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesNoMaterialRoutingModule { }
