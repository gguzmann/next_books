'use client'
import { books, categoriesData } from '@/data/data'
import { storeData } from '@/store/userStore'

export const Explore = () => {
  const { setSearch } = storeData()
  return (
        <>
        {
        categoriesData.length > 0 &&
        categoriesData.map((category, index) => (
          <section key={index} className="mb-8">
            <div className='text-2xl font-bold mb-4 mt-4'>
              <h2>{category}</h2>
              <hr />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {
                books.filter(book => book.categories.includes(category)).slice(0, 3).map((book, i) => (
                  <div key={book.id} className="rounded overflow-hidden w-full">
                    <img className="w-60 object-center" src={book.thumbnailUrl} alt="Sunset in the mountains" />
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2">{book.title}</div>
                      <p className="text-gray-700 text-base truncate">
                        {book.authors.join(', ')}
                      </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                      {book.categories.map((category, i) => (
                        <span onClick={() => { setSearch(category) }} key={i} className="cursor-pointer inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{category}</span>

                      ))}
                    </div>
                  </div>
                ))
              }
            </div>
          </section>
        ))
      }
      </>
  )
}
