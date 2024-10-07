import type {StoryObj} from "@storybook/react";
import {TaskFilter} from "../../types/task";
import {FilterButtons} from "./filter-button";

export default {
	title: "To-Do Filter Button",
	component: FilterButtons,
	argTypes: {
		currentFilter: {
			options: [TaskFilter.All, TaskFilter.Completed, TaskFilter.Incomplete],
			control: {type: "radio"},
		},
	},
};

type Story = StoryObj<{currentFilter: TaskFilter}>;

export const Primary: Story = {};
