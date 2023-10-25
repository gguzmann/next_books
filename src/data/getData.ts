export const fetchData = async () => {
  const res = await fetch(process.env.HOST + '/api/books')
  const { books } = await res.json()
  console.log(process.env.HOST)
  return books
}
