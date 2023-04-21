import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe("Pruebas en todoItem", () => {
	const todo = {
		id: 1,
		description: "Leer",
		done: false,
	};

	const onDeleteTodoMock = jest.fn();
	const onTogleTodoMock = jest.fn();

	beforeEach(() => jest.clearAllMocks());

	test("Debe de mostrar el todo Pendiente", () => {
		render(
			<TodoItem
				todoItem={todo}
				onDeleteTodo={onDeleteTodoMock}
				onTogleTodo={onTogleTodoMock}
			/>
		);

		//console.log(screen.debug())
		const liElement = screen.getByRole("listitem");
		expect(liElement.className).toBe(
			"list-group-item d-flex justify-content-between"
		);

		//Los spans no los encuentra. Por eso se agrego un aria-label en el componente y se usa aqui con getByLabelText
		const spanElement = screen.getByLabelText("span-test");
		//console.debug('the span: ',spanElement.className)
		expect(spanElement.className).toContain("align-self-center");
		expect(spanElement.className).not.toContain("text-decoration-line-through");
	});

	test("Debe de mostrar un item como completado", () => {
		//esto va a cambiar posteriormente creo. No se ve bien esto porque esta mutando el objeto de arriba
		// yo hubiera hecho un nuevo objeto todoComplete = { ..} y usarlo ..vamos a ver despues
		todo.done = true;

		render(
			<TodoItem
				todoItem={todo}
				onDeleteTodo={onDeleteTodoMock}
				onTogleTodo={onTogleTodoMock}
			/>
		);

		const spanElement = screen.getByLabelText("span-test");
		expect(spanElement.className).toContain("text-decoration-line-through");
	});

	test("Debe de llamarse la funcion de toogle al hacer click en el item", () => {
		render(
			<TodoItem
				todoItem={todo}
				onDeleteTodo={onDeleteTodoMock}
				onTogleTodo={onTogleTodoMock}
			/>
		);

		const spanElement = screen.getByLabelText("span-test");
		fireEvent.click(spanElement);

		//aqui usamos toHaveBeenCalledWith pues nos interesa evaluar que se haya llamada con 1 como parametro
		expect(onTogleTodoMock).toHaveBeenCalledWith(todo.id);
	});

	test("Debe de llamarse la funcion de delete al hacer click en el boton", () => {
		render(
			<TodoItem
				todoItem={todo}
				onDeleteTodo={onDeleteTodoMock}
				onTogleTodo={onTogleTodoMock}
			/>
		);

		const buttonElement = screen.getByRole("button");
		fireEvent.click(buttonElement);

		expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
	});
});
