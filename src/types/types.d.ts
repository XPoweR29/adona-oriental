export interface DishGroup {
	id: string;
	name: string;
	dishes: Dish[];
}

export interface Dish {
	id: string;
	group: DishGroup;
	name: string;
	engName: string;
	price: string;
}

export interface ApiResponse {
	message: string;
	data: any;
}

export interface Breakpoints {
	sm: boolean;
	md: boolean;
	lg: boolean;
	xl: boolean;
	xxl: boolean;
}

export interface EditorState {
	id: string;
	name: string,
	engName: string,
	price: string;
}

