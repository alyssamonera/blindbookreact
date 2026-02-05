import BooksGrid from "@/components/books-grid";
import { Suspense } from "react";
import { getBooks } from "@/lib/books";

async function Books() {
	const books = await getBooks()

	return <BooksGrid books={books} />;
}

export default function BooksPage() {
	return (
		<Suspense fallback={<p>Loading...</p>}>
			<Books />
		</Suspense>
	);
}
