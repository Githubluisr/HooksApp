import { useState } from "react";


export const useForm = (initialState) => {

  const [formState, setFormState] = useState(initialState);

  const onHandleChange = ( { target }) => {
      const {name, value, password } = target;

      setFormState( {
        ...formState,
        [ name ] : value
      })
  }

  const onHandleReset = () => {
    setFormState(initialState);
  }


  //Aqui, mandamos desestructurado formstate
  return { ...formState, onHandleChange, onHandleReset }
}
