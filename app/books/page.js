const url = 'https://openlibrary.org/search.json?title=the+lord+of+the+rings';
import React from 'react'

const DrinksPage = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return (
        <div>
            <h1 className='text-7xl'>BooksPage</h1>
        </div>
    )
}

export default DrinksPage
