import { useEffect } from 'react'


export const Message = () => {

  useEffect (() => {
    

    const onMouseMove = ({x, y}) => { // {x , y } es la desestructuracion de event

      const coords = { x, y }
      console.log(coords)
    }

    //Se tiene que hacer a traves de una funcion o re
    window.addEventListener('mousemove', onMouseMove)  


    return () => {
      window.removeEventListener('mousemove', onMouseMove)
    }
  },[]);




  return (
    <>
      <h3>El usuario ya existe</h3>
    </>
  )
}
