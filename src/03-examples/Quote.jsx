import { useRef, useLayoutEffect, useState } from "react"



          
export const Quote = ({quote, author}) => {

  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({
    height: 0,
    width: 0
  })

  useLayoutEffect(() => {
    
    const { height, width } = (pRef.current.getBoundingClientRect());

    setBoxSize({
      height,
      width
    })

  
    
  }, [quote])


  return (
    <>
      <blockquote 
        className='blockquote text-end'
        style={{display:'flex'}}
      >
        <p ref = { pRef } className='mb-3'>{quote}</p>
        <footer className='blockquote-footer'>{author}</footer>
      </blockquote>

      <h5>{JSON.stringify(boxSize)}</h5>

    </>  
  )
}
          