'use client'

import { books } from '@/data/data'
import Link from 'next/link'

export default function Books () {
  return (
        <section className="flex-grow p-6">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-lg font-medium">Transactions</h1>
            </div>
            <div className="w-full overflow-auto">
                <table className="w-full caption-bottom text-sm">
                    <thead className="[&amp;_tr]:border-b">
                        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                            <th
                                className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                                Date</th>
                            <th
                                className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                                Description</th>
                            <th
                                className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                                Category</th>
                            <th
                                className="h-12 px-4 align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 text-right">
                                Amount</th>
                            <th
                                className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                            </th>
                        </tr>
                    </thead>
                    <tbody className="[&amp;_tr:last-child]:border-0">
                        {books.map(book => (
                            <tr key={book._id} className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">{book._id}</td>
                                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                                    <Link href={`/books/${book._id}`}>
                                        {book.title}
                                    </Link>
                                </td>
                                <td className="p-4 align-middle flex gap-2">
                                    {
                                        book.categories.map((category, i) => <span key={i} className="px-2 py-1 bg-slate-100 rounded-md">{category}</span>)
                                    }

                                </td>
                                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-right">$175.00</td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </section>
  )
}
