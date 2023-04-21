import { TodoItem } from "./TodoItem"



export const TodoList = ({todoList = [], onDeleteTodo, onTogleTodo }) => {



  return (
    <ul className="list-group">
      {
        todoList.map( todo => (

          <TodoItem key={todo.id} todoItem={todo} onDeleteTodo =  { onDeleteTodo } onTogleTodo = { onTogleTodo }/>

        ))
      }
		  </ul>
  )
}


