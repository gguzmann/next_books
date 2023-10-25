export const dynamic = 'force-dynamic' // If you want no caching at all

export const fetchData = async () => {
  const res = await fetch('https://next-books-theta.vercel.app/', { next: { revalidate: 1 } })
  const { books } = await res.json()
  console.log(process.env.HOST)
  console.log(books)
  return books
}
