'use client'
import { books, categoriesData } from '@/data/data'
import { useState } from 'react'

export default function Home () {
  const [categories] = useState(categoriesData)

  return (
    <section className="container mx-auto px-4 md:px-6 py-8">
<form className='w-2/3'>
    <label className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-black focus:border-black" placeholder="Search books, authors, categories..." required/>
    </div>
</form>
      {
        categories.length > 0 &&
        categories.map((category, index) => (
          <section key={index} className="mb-8">
            <div className='text-2xl font-bold mb-4 mt-4'>
              <h2>{category}</h2>
              <hr />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {
                books.filter(book => book.categories.includes(category)).slice(0, 3).map((book, i) => (
                  <div key={book.id} className="rounded overflow-hidden w-full">
                    <img className="w-60 object-center" src={book.thumbnailUrl} alt="Sunset in the mountains"/>
                      <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{book.title}</div>
                        <p className="text-gray-700 text-base truncate">
                          {book.authors.join(', ')}
                        </p>
                      </div>
                      <div className="px-6 pt-4 pb-2">
                        {book.categories.map((category, i) => (
                          <span key={i} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{category}</span>

                        ))}
                      </div>
                  </div>
                ))
              }
            </div>
          </section>
        ))
      }

    </section>
  )
}
