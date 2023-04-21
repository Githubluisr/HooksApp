
export const TodoItem = ({todoItem, onDeleteTodo, onTogleTodo }) => {



  return (

    <li className="list-group-item d-flex justify-content-between">
      <span 
        className={`align-self-center ${ todoItem.done ? 'text-decoration-line-through': '' }`}
        onClick={ () => onTogleTodo(todoItem.id)}
        aria-label='span-test'
      >
        {todoItem.description}
      </span>
      
      <button 
        className="btn btn-danger"
        onClick = {() => onDeleteTodo(todoItem.id) }
      >
        Borrar
      </button>
    </li>

  )
}
