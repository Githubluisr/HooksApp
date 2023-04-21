import { renderHook,act } from "@testing-library/react"
import { useForm } from "../../src/hooks/useForm"


describe('Pruebas en useForm', () => {

  const initialForm = {
    name:'Juan Luis',
    email: 'luisrosash@gmail.com'
  }



  test('debe de regresar los valores por defecto', () => {

    const { result } = renderHook(() => useForm(initialForm));
    
    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      onHandleChange: expect.any( Function ),
      onHandleReset: expect.any( Function )
    })
  }) 

  test('Debe de cambiar el nombre del formulario', () => {

    const { result } = renderHook(() => useForm(initialForm) );
    const { onHandleChange } = result.current 
    const newValue='Fernando'

    act(() => {
      onHandleChange({ target : { name:'name', value:newValue}})
    });

    expect(result.current.name).toBe(newValue)

  })


  test('Debe de realizar el reset del formulario', () => {

    const { result } = renderHook(() => useForm(initialForm) );
    const { onHandleChange, onHandleReset} = result.current 
    const newValue='Fernando'

    act(() => {
      onHandleChange({ target : { name:'name', value:newValue}})
      onHandleReset();
    });

    expect(result.current.name).toBe(initialForm.name)

  })



} )