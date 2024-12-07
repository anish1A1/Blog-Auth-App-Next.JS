
import React from 'react'
import Form from 'next/form'
import SearchFormReset from './SearchFormReset';
 

const SearchForm = ({query} : {query?: string}) => {
   
       

       
       

  return (
    <Form action="/" scroll={false} className='search-form'>
    
    <input name='query' defaultValue={query}
    placeholder='Search StartUps ...'
    className='search-input' />        

            {query && <SearchFormReset/>}

            <button type="submit" className='search-btn text-white'>
                S
            </button>
       
    </Form>


  )
}

export default SearchForm
