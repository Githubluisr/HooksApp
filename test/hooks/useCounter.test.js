import { renderHook, act } from '@testing-library/react'
import { useCounter } from '../../src/hooks/useCounter'

describe('Pruebas en useCounter custom hook', () => {

  test('debe de retonrnar los valores por defecto',()  => {

    const { result } = renderHook(() => useCounter() );
    const { counter, decrement, increment, reset } = result.current;


    expect(counter).toBe(10)
    expect(increment).toEqual(expect.any( Function ));
    expect(decrement).toEqual(expect.any( Function ));
    expect(reset).toEqual(expect.any( Function ));

  })

  test('debe de generar el counter con valor de 100', () => {

    const { result } = renderHook( () => useCounter(100))
    const { counter } = result.current;

    expect(counter).toBe(100)

  })


  test('Debe de incrementar el contador', ()=> {

    const { result } = renderHook(() => useCounter(100) );
    const { counter, increment } = result.current;


    // se tiene que usar act como wrapper para evitar el siguiente error:
    //Warning: An update to TestComponent inside a test was not wrapped in act(...).
    //When testing, code that causes React state updates should be wrapped into act(...):
    act(() => {
      increment(2)
    });

    //la razon de usar result.current.counter en lugar de counter, es que en las pruebas el valor de counter no se actualiza
    //esto pasa en los tipos primitivos (strings, enteros, etc). Por eso hay que "consultar" de nuevo el resultado actual
    expect(result.current.counter).toBe(102); 
  })


  test('Debe de decrementar el contador', ()=> {

    const { result } = renderHook(() => useCounter(100) );
    const { decrement } = result.current;

    act(() => {
      decrement(2)
    });

    expect(result.current.counter).toBe(98); 
  })


  test('Debe de realizar el reset', ()=> {

    const { result } = renderHook(() => useCounter(100) );
    const { increment,reset } = result.current;

    act(() => {
      increment(10)
      reset()
    });

    expect(result.current.counter).toBe(100); 
  })

})
