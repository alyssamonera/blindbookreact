import BooksGrid from "@/components/books-grid";
import { Suspense } from "react";
import { getBooks } from "@/lib/books";
import { alphabet } from "@/shared/config";

export const dynamic = "force-dynamic";

type Props = {
	params: Promise<{ slug: string }>;
	searchParams: Promise<{ q: string|undefined }>;
};

/**
 * Gets a random letter to add to the query string
 * @returns letter - the random letter to return
 */
function getRandomLetter() {
	const randomIndex = Math.floor(Math.random() * 26);
	return alphabet[randomIndex].toLowerCase();
}

async function Books({ params, searchParams }: Props) {
	const { slug } = await params;
	const { q } = await searchParams;
	const randomLetter = getRandomLetter();

	const books = await getBooks(slug, randomLetter, q);

	return <BooksGrid books={books} />;
}

export default async function BooksPage({ params, searchParams }: Props) {
	return (
		<Suspense fallback={<p>Loading...</p>}>
			<Books params={params} searchParams={searchParams} />
		</Suspense>
	);
}
