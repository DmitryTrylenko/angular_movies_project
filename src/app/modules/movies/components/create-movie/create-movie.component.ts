import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { rateNotValid } from '@movies-services/custom-validators.validator';
import { MovieModel } from '@movies-models/interfaces';
export class MyErrorStateMatcher implements ErrorStateMatcher {
	isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
		const isSubmitted = form && form.submitted;
		return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
	}
}
@Component({
	selector: 'movies-create-movie',
	templateUrl: './create-movie.component.html',
	styleUrls: ['./create-movie.component.scss']
})
export class CreateMovieComponent implements OnInit {
	form!: FormGroup;
	matcher = new MyErrorStateMatcher();
	title!: string;
	constructor(
		private formBuilder: FormBuilder,
		public dialogRef: MatDialogRef<CreateMovieComponent>,
		@Inject(MAT_DIALOG_DATA) public data: { title: string, movie?: MovieModel }
	) { }
	ngOnInit(): void {
		this.createForm();
	}
	createForm(): void {
		this.form = this.formBuilder.group({
			title: [this.data.movie?.title || '', [Validators.required]],
			rate: [this.data.movie?.rate || '', [Validators.required, rateNotValid]],
			description: [this.data.movie?.description || '', [Validators.required]]
		});
	}
	onSubmit(): void {
		if (!this.form.valid) {
			this.showErrors();
			return;
		}
		this.dialogRef.close(this.normalizeMovie(this.form));
	}
	onReset(): void {
		this.form.reset();
	}
	private showErrors(): void {
		Object.keys(this.form.controls).forEach(field => {
			this.form.get(field)?.markAsDirty({ onlySelf: true });
		});
	}
	private normalizeMovie(form: FormGroup): Omit<MovieModel, 'id'> {
		const { title, rate, description } = form.value;
		return { title: title.trim(), rate: +rate, description };
	}

}
