import { fetchData } from '@/data/getData'

export default async function Categories () {
  const books = await fetchData()
  return (
    <>
    <h1>Categorias</h1>
    {books.length}
    </>
  )
}
