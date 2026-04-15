import { getUserBooks } from "@/lib/books";
import { auth } from "@/lib/auth/server";

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
			<ul>
				{selectedBooks.map((book) => {
					return (
						<li key={book.id} className="my-5">
							<div className="header">
								<h2>{book.volumeInfo.title}</h2>
								<p>
									by
									{" "}
									{book.volumeInfo.authors.map((author) => {
										return <span key={author}>{author}</span>;
									})}
								</p>
							</div>
							<div className="body">
								<h2>Summary</h2>
								<p className="whitespace-break-spaces" dangerouslySetInnerHTML={{
									__html: book.volumeInfo.description,
								}}></p>
							</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
