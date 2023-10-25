export const fetchData = async () => {
  const res = await fetch('https://next-books-theta.vercel.app/api/books')
  const { books } = await res.json()
  console.log(process.env.HOST)
  return books
}
