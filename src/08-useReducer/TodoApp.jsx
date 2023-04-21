import { useTodo } from "../hooks/useTodo";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";

export const TodoApp = () => {
	const {
		todos,
		todosCount,
		pendingTodosCount,
		handleNewTodo,
		handleDeleteTodo,
		handleTogleTodo,
	} = useTodo();

	return (
		<>
			<h1>
				Todo App: {todosCount}, <small>pendientes: {pendingTodosCount}</small>
			</h1>
			<hr />

			<div className="row">
				<div className="col-7">
					<TodoList
						todoList={todos}
						onDeleteTodo={handleDeleteTodo}
						onTogleTodo={handleTogleTodo}
					/>
				</div>

				<div className="col-5">
					<h4>Agregar TODO</h4>
					<hr />

					<TodoAdd onNewTodo={handleNewTodo} />
				</div>
			</div>
		</>
	);
};
