import {Task} from "../../types/task";
import {TaskItem} from "./task-item";

export const TaskList = ({
	tasks,
	onToggle,
}: {
	tasks: Task[];
	onToggle: (id: number) => void;
}) => (
	<ul className="space-y-2">
		{tasks.map((task) => (
			<TaskItem key={task.id} task={task} onToggle={onToggle} />
		))}
	</ul>
);
