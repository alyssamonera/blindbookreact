import { getUserBooks } from "@/lib/books";
import { auth } from "@/lib/auth/server";
import TileGrid from "./tileGrid";
import { Suspense } from "react";
import LoadingPageRoot from "@/app/loading";

export default async function MyBookPage() {
	async function TileContainer() {
		const { data: session } = await auth.getSession();
		const selectedBooks = await getUserBooks(session?.user.id || '');

		if (!selectedBooks || selectedBooks.length === 0) {
			return <div>
				Nothing here yet...
			</div>
		}

		return (
			<TileGrid books={selectedBooks} />
		);
	}

	return (
		<>
			<div className="text-center my-3">
				<h1 className="text-3xl font-bold">My Books</h1>
			</div>
			<Suspense fallback={<LoadingPageRoot />}>
				<TileContainer />
			</Suspense>
		</>
	);
}
