export interface Task {
	id: number;
	title: string;
	completed: boolean;
}

export enum TaskFilter {
	"All" = "All",
	"Completed" = "Completed",
	"Incomplete" = "Incomplete",
}
