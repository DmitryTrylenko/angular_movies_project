export const UsersStateName = 'users';

export interface UsersState {
	userInfo?: User;
}

export interface User {
	id: string;
	name: string;
	role: Role;
}

export type Role = 'admin' | 'user';