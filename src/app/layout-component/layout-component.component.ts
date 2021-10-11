import { Component } from '@angular/core';
import { menuConfig } from '@movies-models/menu.config';
import { AuthorizationService } from '@movies-services/authorization.service';
import { UsersStoreService } from '../../app/store/users/services/users-store.service';
import { delay } from 'rxjs/operators';

@Component({
	selector: 'movies-layout-component',
	templateUrl: './layout-component.component.html',
	styleUrls: ['./layout-component.component.scss']
})
export class LayoutComponentComponent {
	routes = menuConfig;
	currentUser$ = this.usersStoreService.userMe$.pipe(delay(1000));

	constructor(private authService: AuthorizationService, private usersStoreService: UsersStoreService) {
		usersStoreService.requestUserMe();
	}

	logout() {
		this.authService.logout();
	}
}
