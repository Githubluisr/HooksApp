import { useMemo, useState } from 'react';
import { useCounter } from '../hooks'


//esta funcion esta ves la ponemos fuera del compoente en si para que no ocupe otro espacio de 
// memoria, pero es indistinto...
const heavyStuff = (iterations) => {

  for (let i=1; i<iterations; i++) {
    console.log('Printing ...')
  }

  return `${iterations} iterations`
}

export const MemoHook = () => {

  const { counter, increment } = useCounter(100);
  const [show, setShow] = useState(true)

  // UseMemo regresa algo "memorizado", en este caso recuerada lo de nuestra funcion
  // el primer parametro es la funcion ..aquello que nos va a retornar el valor que queremos memorizar
  // el segundo parametro, el array, es "renderiate si esta dependencia cambia". En este caso, renderizate si y solo si counter cambia
  // finalmente, el lado izquierda, lo memorizado se usa abajo en el jsx , en este caso la variable memorizedValue
  const memorizedValue= useMemo( () => heavyStuff(counter), [counter] ) 


  return (
    <>
      <h1>Counter with MemoHook <small> { counter }</small> </h1>
      <hr/>

      <h4> { memorizedValue } </h4>

      <button
        className='btn btn-primary'
        onClick={ ()=> increment() }
      >
        + 1
      </button>

      <button 
        className='btn btn-outline-primary'
        onClick= {() => setShow(!show)}>
        show / hide { JSON.stringify(show)}
      </button>
    </>
  )
}
