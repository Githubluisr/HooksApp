import { todoReducer } from "../../src/08-useReducer/todoReducer"

describe('Pruebas en todo Reducer', () => {

  const initialState = [
    {
      id:1,
      description: 'Demo TODO',
      done: false
    }
  ]


  test('Debe de regresar el estado inicial', () => {

    //al no mandarle accion, el swith entra en el default regresando en teoria el estado inicial 
    const newState = todoReducer(initialState, {});
    expect(newState).toBe(initialState);

  })

  test('Debe de agregar una nueva tarea', ()=> {

    const action = {
      type: 'add',
      payload: {
        id:2,
        description: 'Cantar',
        done:false
      } 
    }

    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(2)
    expect(newState).toContain(action.payload) //significa: ve si el newState contiene el payload 

  })

  test('Debe de eliminar una tarea', () => {

    const action = {
      type: 'delete',
      payload: 1
    }


    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(0)

  })

  test('Debe de realizar el toggle de una tarea', () => {

    const action = {
      type: 'toggle',
      payload: 1
    }


    const newState = todoReducer(initialState, action);
    //console.log(newState[0].done)  
    expect(newState[0].done).toBe(true)

  })

})