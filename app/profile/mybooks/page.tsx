import { getUserBooks } from "@/lib/books";
import { auth } from "@/lib/auth/server";
import TileGrid from "./tileGrid";

export default async function MyBookPage() {
	const { data: session } = await auth.getSession();
	const selectedBooks = await getUserBooks(session?.user.id || '');

	if (!selectedBooks || selectedBooks.length === 0) {
		return <div>
			Nothing here yet...
		</div>
	}

	return (
		<div>
			<TileGrid books={selectedBooks} />
		</div>
	);
}
