//En proyectos creados con Vite, se tiene que agregar esto pues de lo contrario, React.memo genera el error:
//ReferenceError: React is not defined
 
import React from 'react' 


// memo como su nombre lo indica, memoriza el componente. Si sus propiedades NO cambian NO re-renderiza el componente
// no se recomienda mucho su uso, salvo que este compoonente incluya mucha logica y o peticiones o este decrementando
// el rendimiento de la aplicacion


export const Small = React.memo(({value}) => {

  console.log('Small renderizado')
  
  return (
    <>
      <small> { value } </small>
    </>
    
  )
})
