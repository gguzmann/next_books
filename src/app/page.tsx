// import { Explore } from '@/components/Explore'
import { ListBooks } from '@/components/ListBooks'
import { Search } from '@/components/Search'
import { fetchData } from '@/data/getData'

export default async function Home () {
  const books: any[] = await fetchData()

  return (
    <section className="container mx-auto px-4 md:px-6 py-8 w-full">
      <Search/>
      <ListBooks books={books}/>
    </section>
  )
}
