import { AbstractControl, ValidationErrors } from '@angular/forms';

export function rateNotValid(control: AbstractControl): ValidationErrors | null {
	if (!control.value) {
		return null;
	}
	return +control.value > 10 ? { rateNotValid: true } : null;
}
