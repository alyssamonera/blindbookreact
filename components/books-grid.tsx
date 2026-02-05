type Book = {
    id: string, description: string
}

type BooksGridProps = {
    books: Book[]
}

export default function BooksGrid({books}) {
    return <ul>
        {books.map(book => <li key={book.id} className="py-3">
            {book.description}
        </li>)}
    </ul>
}