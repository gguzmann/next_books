export const dynamic = 'force-dynamic' // If you want no caching at all

export const fetchData = async () => {
  const res = await fetch('https://next-books-theta.vercel.app/api/books', { next: { revalidate: 1 } })
  const { books } = await res.json()
  return books
}
