


export const todoReducer = (state = [], action ) => {

  switch (action.type) {
    case 'add':
      return [...state, action.payload]

    case 'delete':
      return state.filter(state => state.id !== action.payload)

    case 'toggle':
      
      return state.map(task => {
        if (task.id === action.payload ) {
          return {
            ...task,
            done: !task.done
          }
        }

        return task;

      })

    default:
      break;
  }
  
  return state;
}