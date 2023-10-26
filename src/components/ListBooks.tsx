'use client'
import type { Book } from '@/model/interfaces'
import { storeData } from '@/store/userStore'
import { Explore } from './Explore'
import Link from 'next/link'
import { categoriesData } from '@/data/data'
export const ListBooks: React.FunctionComponent<any> = ({ books }) => {
  const { search, setSearch } = storeData()

  return (
        <section className="flex-grow p-6">

            {
                search.length < 1
                  ? <Explore />
                  : <>
                        <div className='flex gap-2 items-center'>
                            {
                                search.length > 1 &&
                                categoriesData.filter(x => x.toLocaleLowerCase().includes(search.toLocaleLowerCase())).map((a, i) => (
                                    <span key={i} onClick={() => { setSearch(a) }} className="px-2 py-1 bg-slate-100 rounded-md cursor-pointer">{a}</span>

                                ))
                            }
                        </div>
                        <div className="flex justify-between items-center mb-4">
                            <h1 className="text-lg font-medium">Search: {search}</h1>
                        </div>
                        <div className="w-full">
                            <ul className="w-full divide-y divide-gray-200 dark:divide-gray-700">
                                {
                                    books?.filter((x: Book) => x.title.toLowerCase().includes(search.toLowerCase()) || x.categories.includes(search.charAt(0).toUpperCase() + search.slice(1)) || x.authors.includes(search.charAt(0).toUpperCase() + search.slice(1)))
                                      .map((book: Book) => (
                                            <li key={book.id} className="pb-3 sm:pb-4 p-5">
                                                <div className="flex items-center space-x-4">
                                                    <div className="flex-shrink-0">
                                                        <img className="w-24 h-24 rounded-full" src={book.thumbnailUrl ?? 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'} alt="Neil image" />
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <h2 className=" font-medium text-gray-900 truncate ">
                                                            {book.title}
                                                        </h2>
                                                        <p className="text-sm text-gray-500 truncate">
                                                            {book.authors.join(', ')}
                                                        </p>
                                                        <p className='text-sm text-gray-700 my-2'>
                                                            {book.shortDescription}
                                                        </p>
                                                    </div>
                                                    <Link href={`/books/${book.id}`} className="inline-flex items-center text-base font-semibold text-gray-900 ">
                                                        See more info
                                                    </Link>
                                                </div>
                                                <div className='mt-5 flex gap-2'>
                                                    {book.categories.map((category, i) => <span key={i} onClick={() => { setSearch(category) }} className="px-2 py-1 bg-slate-100 rounded-md cursor-pointer">{category}</span>)}

                                                </div>
                                            </li>
                                      ))
                                }
                            </ul>
                        </div>
                    </>
            }

        </section>
  )
}
