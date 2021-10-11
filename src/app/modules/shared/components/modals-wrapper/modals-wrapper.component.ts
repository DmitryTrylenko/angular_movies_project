import { Component, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
	selector: 'movies-modals-wrapper',
	templateUrl: './modals-wrapper.component.html',
	styleUrls: ['./modals-wrapper.component.scss']
})
export class ModalsWrapperComponent<T> {
	@Input() dialogRef!: MatDialogRef<T>;
}
