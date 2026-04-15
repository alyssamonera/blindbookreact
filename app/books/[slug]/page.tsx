import { Suspense } from "react";
import { getBooks } from "@/lib/books";
import BooksCarousel from "@/components/results/books-carousel";
import LoadingPageRoot from "@/app/loading";
import { auth } from "@/lib/auth/server";

export const dynamic = "force-dynamic";

type Props = {
	params: Promise<{ slug: string }>;
	searchParams: Promise<{ q: string|undefined }>;
};

async function BooksCarouselContainer({ params, searchParams }: Props) {
	const { slug } = await params;
	const { q } = await searchParams;
	const { data: session } = await auth.getSession();

	const books = await getBooks(slug, q, session?.user?.id || '');

	if (!books || books.length === 0) {
		return <div>No books found in the container</div>;
	}

	return <BooksCarousel books={books} />
}

export default async function BooksPage({ params, searchParams }: Props) {
	return (
		<Suspense fallback={<LoadingPageRoot />}>
			<BooksCarouselContainer params={params} searchParams={searchParams} />
		</Suspense>
	);
}
