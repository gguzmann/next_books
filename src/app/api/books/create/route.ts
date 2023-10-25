import { books, booksTest } from '@/data/data'
import prisma from '@/data/prisma'
import { NextResponse } from 'next/server'

export async function GET () {
  const obj: any = {
    title: 'Unlocking Android',
    isbn: '1933988673',
    publishedDate: new Date('2009-04-01T00:00:00.000-0700'),
    thumbnailUrl: 'https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson.jpg',
    status: 'PUBLISH',
    authors: ['W. Frank Ableson', 'Charlie Collins', 'Robi Sen'],
    categories: ['Open Source', 'Mobile']
  }

  const arrayBook = books.map(book => {
    return {
      title: book.title ?? '',
      isbn: book.isbn ?? '',
      publishedDate: new Date('2009-04-01T00:00:00.000-0700') ?? '',
      thumbnailUrl: book.thumbnailUrl ?? '',
      shortDescription: book.shortDescription ?? '',
      longDescription: book.longDescription ?? '',
      status: book.status ?? '',
      authors: book.authors ?? '',
      categories: book.categories
    }
  })
  const test = await prisma.book.createMany({ data: arrayBook })
  console.log(test)
  return NextResponse.json({
    message: 'create data books'
  })
}
