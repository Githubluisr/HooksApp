

const initialState = [{
  id: 1,
  todo: 'Recolectar la piedra del Alma',
  done: false,
}]


const todoReducer = (state = initialState, action ) => {

  if ( action.type == 'add') {
    return [ ...state, action.payload]
  }



  return state;

}

const action = {
  type: 'add',
  payload: {
    id:2,
    todo: 'Recolectar piedra del poder',
    done: false
  }
}  



let todos = todoReducer(initialState, action )

console.log(todos)