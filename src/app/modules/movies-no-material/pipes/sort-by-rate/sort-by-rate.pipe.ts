import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'sortByRate'
})
export class SortByRatePipe implements PipeTransform {

	transform<T extends { rate: number }>(movies: T[]): T[] {
		if (!movies || !movies.length) {
			return movies;
		}
		return [...movies].sort((a, b) => b.rate - a.rate);
	}
}
