import type {StoryObj} from "@storybook/react";
import {Task} from "src/types/task";
import {TaskList} from "./task-list";

export default {
	title: "To-Do List",
	component: TaskList,
};

type Story = StoryObj<{tasks: Task[]}>;

const tasksNotCompleted = [
	{id: 1, title: "Task 1", completed: false},
	{id: 2, title: "Task 2", completed: false},
];

const tasksCompleted = [
	{id: 1, title: "Task 1", completed: true},
	{id: 2, title: "Task 2", completed: true},
];

export const NotCompleted: Story = {
	args: {
		tasks: tasksNotCompleted,
	},
};

export const Completed: Story = {
	args: {
		tasks: tasksCompleted,
	},
};
