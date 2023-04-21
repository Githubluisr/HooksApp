import { render, screen } from "@testing-library/react";
import { TodoApp } from "../../src/08-useReducer/TodoApp";
import { useTodo } from "../../src/hooks/useTodo";

jest.mock("../../src/hooks/useTodo");

describe("Pruebas en TodApp ", () => {
	useTodo.mockReturnValue({
		todos: [
			{ id: 1, description: "Leer", done: false },
			{ id: 2, description: "Comer", done: true },
		],
		todosCount: 2,
		pendingTodosCount: 1,
		handleNewTodo: jest.fn(),
		handleDeleteTodo: jest.fn(),
		handleTogleTodo: jest.fn,
	});

	test("Debe de mostrar el componente incial", () => {
		render(<TodoApp />);

		expect(screen.getByText("Leer")).toBeTruthy();
		expect(screen.getByText("Comer")).toBeTruthy();
		expect(screen.getByRole("textbox")).toBeTruthy();
	});
});
