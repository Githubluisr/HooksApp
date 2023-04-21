import { useState, useCallback } from 'react'
import { ShowIncrement } from './ShowIncrement'


export const CallbackHook = () => {
  const [counter, setCounter] = useState(10)

  const increment = useCallback(
    (value) => { //el 5 (o el valor que viene del componente hijo) se pasa como parametro para usarlo dentro
      setCounter(count => count + value) // lo que tenga count (que es el counter del estado) mas lo que venga de parametro
    },
    [],
  )
  
    const mensaje = `este es un mensaje ${counter}`

  return (
    <>
      <h1>useCallback Hook : { counter }</h1>
      <hr/>

      <ShowIncrement increment = { increment }/>
    </>
  )
}
