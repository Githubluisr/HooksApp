import { fireEvent, render, screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../../src/03-examples"
import { useCounter } from '../../src/hooks/useCounter'
import { useFetch } from "../../src/hooks/useFetch"

jest.mock('../../src/hooks/useFetch')
jest.mock('../../src/hooks/useCounter')

describe('Pruebas en <MultipleCustomHook>', () => {

  //realmente esto se usa en la prueba de 'Debe de llamar la funcion de incrementar', pero al agregar el jest.mock
  //todas las demas pruebas empiezan a fallar. Poniendolo aqui vuelven a funcionar (y el beforeEach() es para limpiar )
  const mockIncrement = jest.fn();
  useCounter.mockReturnValue({
    counter:1,
    increment: mockIncrement
  })

  beforeEach(() => {
    jest.clearAllMocks();
  })


  test('Debe de mostrar el componente por defecto', () => {

    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null
    })

    render(<MultipleCustomHooks />)
    //console.log(screen.debug())
    
    expect(screen.getByText('Loading ...')).toBeTruthy();
    expect(screen.getByText('BreakingBad Quotes')).toBeTruthy();
    //expect(screen.getByRole('button'))
    const nextButton = screen.getByRole('button', {name: 'Next quote'} )

    expect(nextButton.disabled).toBeTruthy();
    
  })


  test('Debe de mostrar un quote', () => {
  

    useFetch.mockReturnValue({
      data: [{author: 'Winston Churchill', quote: 'This is the end of the beggining'}],
      isLoading: false,
      hasError: null
    })


    render(<MultipleCustomHooks/>)
    
    expect(screen.getByText('Winston Churchill')).toBeTruthy();
    expect(screen.getByText('This is the end of the beggining')).toBeTruthy();
    expect(screen.getByRole('button', {name: 'Next quote'}).disabled).toBeFalsy();

    
  })


  test('Debe de llamar la funcion de incrementar', () => {
    

    useFetch.mockReturnValue({
      data: [{author: 'This is the end of the beggining', quote: 'Winston Churchill'}],
      isLoading: false,
      hasError: null
    })


    render(<MultipleCustomHooks/>)
    const nextButton = screen.getByRole('button', {name: 'Next quote'} )
    fireEvent.click (nextButton);

    expect(mockIncrement).toHaveBeenCalled();
  })


})
