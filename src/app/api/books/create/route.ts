// import { books } from '@/data/data'
// import prisma from '@/data/prisma'
// import type { Book } from '@/model/interfaces'
import { NextResponse } from 'next/server'

export async function GET () {
  // const arrayBook: Book[] = books.map(book => {
  //   return {
  //     id: 0,
  //     title: book.title ?? '',
  //     isbn: book.isbn ?? '',
  //     pageCount: book.pageCount ?? 0,
  //     publishedDate: new Date('2009-04-01T00:00:00.000-0700') ?? '',
  //     thumbnailUrl: book.thumbnailUrl ?? '',
  //     shortDescription: book.shortDescription ?? '',
  //     longDescription: book.longDescription ?? '',
  //     status: book.status ?? '',
  //     authors: book.authors ?? '',
  //     categories: book.categories
  //   }
  // })
  // const test = await prisma.book.createMany({ data: arrayBook })
  // console.log(test)
  return NextResponse.json({
    message: 'create data books'
  })
}
