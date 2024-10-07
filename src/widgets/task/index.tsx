import axios from "axios";
import {useEffect, useState} from "react";
import {Button} from "../../components/ui/button";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "../../components/ui/card";
import {Input} from "../../components/ui/input";
import {Task, TaskFilter} from "../../types/task";
import {FilterButtons} from "./filter-button";
import {TaskList} from "./task-list";

export const TaskWidget = () => {
	const [tasks, setTasks] = useState<Task[]>([]);
	const [taskInput, setTaskInput] = useState<string>("");
	const [filter, setFilter] = useState<TaskFilter>(TaskFilter.All);

	useEffect(() => {
		const fetchTasks = async () => {
			const response = await axios.get("/api/tasks");
			if (!response) return;
			const data: Task[] = response.data;
			setTasks(data);
		};

		fetchTasks();
	}, []);
	const addTask = async () => {
		if (!taskInput.trim()) return;

		const newTask: Omit<Task, "id"> = {
			title: taskInput.trim(),
			completed: false,
		};

		const response = await axios.post("/api/tasks", newTask);

		const createdTask: Task = await response.data;
		setTasks((prev) => [...prev, createdTask]);
		setTaskInput("");
	};

	const toggleTask = (id: number) => {
		setTasks((prev) =>
			prev.map((t) => (t.id === id ? {...t, completed: !t.completed} : t))
		);
	};

	const filteredTasks = tasks.filter((task) => {
		if (filter === TaskFilter.Completed) return task.completed;
		if (filter === TaskFilter.Incomplete) return !task.completed;
		return true;
	});

	return (
		<Card>
			<CardHeader>
				<CardTitle>To-Do App</CardTitle>
			</CardHeader>
			<CardContent className="pb-0">
				<form
					className="flex space-x-2 mb-4"
					onSubmit={(e) => e.preventDefault()}
				>
					<Input
						type="text"
						placeholder="Add a new task..."
						value={taskInput}
						onChange={(e) => setTaskInput(e.target.value)}
					/>
					<Button onClick={addTask}>Add Task</Button>
				</form>
				<FilterButtons currentFilter={filter} onFilterChange={setFilter} />
			</CardContent>
			<CardContent>
				<div className="max-h-[800px] overflow-y-auto">
					<TaskList tasks={filteredTasks} onToggle={toggleTask} />
				</div>
			</CardContent>
		</Card>
	);
};
