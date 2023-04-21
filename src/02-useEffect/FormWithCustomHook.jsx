import { useState } from "react"
import { useForm } from "../hooks/useForm"

export const FormWithCustomHook = () => {

  const { username, email, password, onHandleChange, onHandleReset } = useForm (
    {
        username: '',
        email: '',
        password:''
      }
  )

  //Si , desde el custom hook desestructuramos las variables ya no necesitamos esto
  //const { username, email, password } = formState;



  // Esto se puede extraer en el custom hook
  // const [formState, setFormState] = useState({
  //   username: '',
  //   email: '',
  //   password:''
  // })

  // const onHandleChange = ( { target }) => {

  //     const {name, value, password } = target;

  //     setFormState( {
  //       ...formState,
  //       [ name ] : value
  //     })

  // }



  return (
    <>
      <h1>Formulario con Custom Hook</h1>
      <hr/>

      <input 
        type='text'
        className="form-control" 
        placeholder="User Name"
        name='username'
        value = {username} 
        onChange = { onHandleChange } 
        />
        

      <input 
        type='email'
        className="form-control mt-3" 
        placeholder="e-Mail"
        name='email'
        value = {email}
        onChange = { onHandleChange }
        />  

      <input 
        type='password'
        className="form-control mt-3" 
        placeholder="Contraseña"
        name='password'
        value = {password}
        onChange = { onHandleChange }
        />


        <button onClick= { onHandleReset } className='btn btn-primary mt-2'>Reset</button>
      
    </>
    
  )
}
