"use client"
import Link from 'next/link';
import React from 'react'

const SearchFormReset = () => {

    const reset = () =>{
            
        const form = document.querySelector('.search-form') as HTMLFormElement;

        if(form) form.reset();
    }

  return (
    <div className="flex gap-2">
    {
        <button type="reset" onClick={reset}>
                <Link href="/" className='text-white search-btn'>X</Link>
        </button>
    
}
</div>
  )
}

export default SearchFormReset
