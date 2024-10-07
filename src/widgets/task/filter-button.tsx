import {Button} from "../../components/ui/button";
import {TaskFilter} from "../../types/task";

export const FilterButtons = ({
	currentFilter,
	onFilterChange,
}: {
	currentFilter: TaskFilter;
	onFilterChange: (filter: TaskFilter) => void;
}) => (
	<div className="flex space-x-2 mb-4">
		{[TaskFilter.All, TaskFilter.Completed, TaskFilter.Incomplete].map(
			(filter) => (
				<Button
					key={filter}
					variant={currentFilter === filter ? "default" : "outline"}
					onClick={() => onFilterChange(filter)}
				>
					{filter}
				</Button>
			)
		)}
	</div>
);
