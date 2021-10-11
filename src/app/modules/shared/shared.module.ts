import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleFormatterPipe } from '@movies-shared/pipes/title-formatter/title-formatter.pipe';
import { ConfirmationDialogComponent } from '@movies-shared/components/confirmation-dialog/confirmation-dialog.component';
import { TopRatedDirective } from '@movies-shared/directives/top-rated/top-rated.directive';
import { ModalsWrapperComponent } from '@movies-shared/components/modals-wrapper/modals-wrapper.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

const SHARED_PIPES = [
	TitleFormatterPipe
];
const SHARED_COMPONENTS = [
	ModalsWrapperComponent,
	ConfirmationDialogComponent
];
const SHARED_DIRECTIVES = [
	TopRatedDirective
];

@NgModule({
	declarations: [
		...SHARED_PIPES,
		...SHARED_DIRECTIVES,
		...SHARED_COMPONENTS
	],
	imports: [
		CommonModule,
		MatDialogModule,
		MatDividerModule,
		MatIconModule,
		MatButtonModule
	],
	exports: [
		MatDialogModule,
		MatDividerModule,
		MatIconModule,
		MatButtonModule,
		...SHARED_PIPES,
		...SHARED_DIRECTIVES,
		...SHARED_COMPONENTS
	]
})
export class SharedModule { }