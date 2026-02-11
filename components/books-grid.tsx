import { bookResult } from "@/shared/types"
import { notFound } from "next/navigation"

type BooksGridProps = {
    books: bookResult[]
}

export default function BooksGrid({books}: BooksGridProps) {
    if (books.length === 0) {
        notFound();
    }

    return <ul className="flex flex-wrap">
        {books.map((book) => <li key={book.id} className="py-3 m-2 whitespace-break-spaces border-amber-600 border-3">
            {book.volumeInfo.description}
        </li>)}
    </ul>
}