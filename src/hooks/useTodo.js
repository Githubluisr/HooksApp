import { useReducer, useEffect } from 'react';
import { todoReducer } from "../08-useReducer/todoReducer";

const init = () => {
	return JSON.parse(localStorage.getItem('todos')) || [];
}


export const useTodo = () => {

  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(()=> {
		localStorage.setItem('todos',JSON.stringify(todos));
	},[todos])

	//habia hecho estas funciones, pero es mejor hacerlas abajo directamente,  con esto no necesito llamarlas como funciones 
	// como todosCount() o pendigTodosCount()
	// const todosCount = () => {
	// 	return todos.length;
	// }

	// const pendingTodosCount = () => {
	// 	return todos.filter(todo => !todo.done).length;
	// }

  const handleNewTodo = (todo) => {
    dispatch({
      type:'add',
      payload: todo
    });
	}

	const handleDeleteTodo = ( id ) => {
		dispatch ( {
			type: 'delete',
			payload: id
		});
}

	const handleTogleTodo = ( id ) => {
		dispatch ( {
			type: 'toggle',
			payload: id
		});
	}

  return {
    todos,
		todosCount: todos.length,
		pendingTodosCount: todos.filter(todo => !todo.done).length,
    handleNewTodo,
    handleDeleteTodo,
    handleTogleTodo
  }
}
