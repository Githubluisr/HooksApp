import { useState } from 'react';
import { useCounter, useFetch } from '../hooks';
import { LoadingQuote, Quote } from '../03-examples'; 


export const Layout = () => {

  const [indexSearch, setIndexSearch] = useState(1);
  const {counter , increment, setIndex} =  useCounter();
  const {data, isLoading, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);
  const { author, quote } = !!data && data[0]; 

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr/>

      { 
        isLoading ? <LoadingQuote/> : <Quote quote={quote} author={author}/>
      }

      <button 
        className='btn btn-primary' 
        disabled = {isLoading} 
        onClick={ () => increment()}
      >
        Next quote
      </button>

      
      <input 
        type='text'
        placeholder='# ID'
        className='form-control mt-5'
        name='index'
        onChange={ (e) => setIndexSearch(e.target.value) }
      >
      </input>

      <button 
        className='btn btn-primary mt-2' 
        disabled = {isLoading} 
        onClick = { () => setIndex(indexSearch) }
      >
        Find by Id
      </button>



    </>
  )
}
