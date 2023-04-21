import { useRef } from "react"


export const FocusScreen = () => {

  const inputRef = useRef();

  const onHandleClick = () => {
    console.log(inputRef)
    inputRef.current.select();
  }

  return (
    <>
      <h1>Focus Screen</h1>
      <hr/>

      <input
        ref = { inputRef }
        type='text'
        placeholder='name'
        className = 'form-control'
      >
      </input>

      <button 
        className="btn btn-primary mt-2"
        onClick= {onHandleClick} 
      >
        Set Focus
      </button>

    </>
  )
}
