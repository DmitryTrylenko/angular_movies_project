export interface ListMovieModel {
	id: string;
	title: string;
	rate: number;
}

export interface MovieModel extends ListMovieModel {
	description: string;
}

export interface Paginator<T> {
	items: T[];
	length: number;
}

export interface User {
	id: string;
	name: string;
	role: Role;
}

export type Role = 'admin' | 'user';