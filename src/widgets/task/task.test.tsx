import "@testing-library/jest-dom/";
import {act, fireEvent, render, screen, waitFor} from "@testing-library/react";
import axios from "axios";
import {defaultTask} from "src/mock/data";
import {TaskWidget} from ".";

jest.mock("axios");

test("renders To-Do App title", () => {
	render(<TaskWidget />);
	const titleElement = screen.getByText(/To-Do App/i);
	expect(titleElement).toBeInTheDocument();
});

test("fetch and render task list", async () => {
	axios.get = jest.fn().mockResolvedValue({data: defaultTask});

	await act(async () => {
		render(<TaskWidget />);
	});

	await waitFor(() =>
		expect(screen.getByText(/Join Hachium/i)).toBeInTheDocument()
	);
});

test("allows users to add a new task", async () => {
	const newTask = {id: 4, title: "New Task"};
	axios.post = jest.fn().mockResolvedValueOnce({data: newTask});

	await act(async () => {
		render(<TaskWidget />);
	});
	const inputElement = screen.getByPlaceholderText(/Add a new task.../i);
	const buttonElement = screen.getByText(/Add Task/i);
	await act(async () => {
		fireEvent.change(inputElement, {target: {value: newTask.title}});
		fireEvent.click(buttonElement);
	});
	await waitFor(() =>
		expect(screen.getByText(/New Task/i)).toBeInTheDocument()
	);
});

test("allows users to filter tasks", async () => {
	axios.get = jest.fn().mockResolvedValue({data: defaultTask});
	const newTask = {id: 4, title: "New Task"};
	axios.post = jest.fn().mockResolvedValueOnce({data: newTask});

	await act(async () => {
		render(<TaskWidget />);
	});
	const inputElement = screen.getByPlaceholderText(/Add a new task.../i);
	const buttonElement = screen.getByText(/Add Task/i);

	await act(async () => {
		fireEvent.change(inputElement, {target: {value: newTask.title}});
		fireEvent.click(buttonElement);
	});

	fireEvent.click(screen.getByText(/Incomplete/i));

	// Task "Join Hachium" is mark as complete already but New task is incomplete
	const taskCompletedElement = await screen.queryByText(/Join Hachium/i);
	expect(taskCompletedElement).not.toBeInTheDocument();
	expect(screen.getByText(/New Task/i)).toBeInTheDocument();
});
