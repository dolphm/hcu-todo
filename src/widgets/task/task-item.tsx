import {Checkbox} from "../../components/ui/checkbox";
import {Task} from "../../types/task";

export const TaskItem = ({
	task,
	onToggle,
}: {
	task: Task;
	onToggle: (id: number) => void;
}) => (
	<li className="flex items-center space-x-2">
		<Checkbox
			checked={task.completed}
			onCheckedChange={() => onToggle(task.id)}
			id={`task-${task.id}`}
		/>
		<label
			htmlFor={`task-${task.id}`}
			className={`flex-grow ${
				task.completed ? "line-through text-gray-500" : ""
			}`}
		>
			{task.title}
		</label>
	</li>
);
