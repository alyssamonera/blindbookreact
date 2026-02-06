type Book = {
    id: string, description: string
}

type BooksGridProps = {
    books: Book[]
}

export default function BooksGrid({books}: BooksGridProps) {
    return <ul className="flex flex-wrap">
        {books.map((book) => <li key={book.id} className="py-3 m-2 whitespace-break-spaces border-amber-600 border-3">
            {book.description}
        </li>)}
    </ul>
}