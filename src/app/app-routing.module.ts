import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponentComponent } from './layout-component/layout-component.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'movies',
		pathMatch: 'full'
	},
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: '',
		component: LayoutComponentComponent,
		canActivate: [AuthGuardGuard],
		children: [
			{
				path: 'movies',
				loadChildren: () => import('./modules/movies/movies.module').then(m => m.MoviesModule)
			},
			{
				path: 'movies-no-material',
				loadChildren: () => import('./modules/movies-no-material/movies-no-material.module')
					.then(m => m.MoviesNoMaterialModule)
			},
			{
				path: 'movies-with-paginator',
				loadChildren: () => import('./modules/movies-with-paginator/movies-with-paginator.module')
					.then(m => m.MoviesWithPaginatorModule)
			},
			{
				path: 'draggable-movies',
				loadChildren: () => import('./modules/draggable-movies/draggable-movies.module')
					.then(m => m.DraggableMoviesModule)
			}
		]
	},
	{
		path: '**',
		redirectTo: 'movies'
	}

];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }