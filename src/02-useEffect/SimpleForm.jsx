import { useState } from "react"
import { Message } from "./Message";



export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    username: 'Juan Luis',
    email: 'luisrosash@gmail.com'
  })

  const onHandleChange = ( { target }) => {

      const {name, value} = target;

      setFormState( {
        ...formState,
        [ name ] : value
      })

  }

  return (
    <>
      <h1>Formulario Simple</h1>
      <hr/>

      <input 
        type='text'
        className="form-control" 
        placeholder="User Name"
        name='username'
        onChange = { onHandleChange } />
        

      <input 
        type='email'
        className="form-control mt-3" 
        placeholder="luisrosash@gmail.com"
        name='email'
        onChange = { onHandleChange }/>  

      {
        formState.username ==='Dart' && <Message/>
      }
      
    </>
    
  )
}
