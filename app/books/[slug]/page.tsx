import BooksGrid from "@/components/books-grid";
import { Suspense } from "react";
import { getBooks } from "@/lib/books";
import { genreInput } from "@/shared/types";
import { genres } from "@/shared/config";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>
}

function isValidGenre(slug: string): slug is genreInput {
	return slug in genres;
}

async function Books({params}: Props) {
	const { slug } = await params;

	if (!isValidGenre(slug)) {
		notFound();
	}

	const books = await getBooks(slug);

	return <BooksGrid books={books} />;
}

export default function BooksPage({params}: Props) {
	return (
		<Suspense fallback={<p>Loading...</p>}>
			<Books params={params} />
		</Suspense>
	);
}
