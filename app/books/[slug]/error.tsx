// Error components must be clientside in case of clientside errors
'use client';

export default function BooksError() {
    return <main className="error">
        <h1>An error occurred!</h1>
        <p>Failed to fetch book data. Please try again later.</p>
    </main>
}