import { Suspense } from "react";
import BooksLoaderClient from "@/components/results/books-loader-client";
import LoadingPageRoot from "@/app/loading";
import { auth } from "@/lib/auth/server";

export const dynamic = "force-dynamic";

type Props = {
	params: Promise<{ slug: string }>;
	searchParams: Promise<{ q: string | undefined }>;
};

async function BooksCarouselContainer({ params, searchParams }: Props) {
	const { slug } = await params;
	const { q } = await searchParams;
	const { data: session } = await auth.getSession();
	// render a client component that fetches and aborts on unmount
	return <BooksLoaderClient slug={slug} q={q} userId={session?.user?.id} />;
}

export default async function BooksPage({ params, searchParams }: Props) {
	return (
		<div>
			<div className="text-center my-8">
				<h1 className="text-2xl font-bold">Time To Swipe</h1>
			</div>
			<Suspense fallback={<LoadingPageRoot />}>
				<BooksCarouselContainer params={params} searchParams={searchParams} />
			</Suspense>
		</div>
	);
}
