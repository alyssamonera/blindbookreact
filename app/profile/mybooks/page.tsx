"use client";

import { BooksContext } from "@/app/context/books-context";
import { useContext } from "react";

export default function MyBookPage() {
	const { selectedBooks } = useContext(BooksContext);

    console.log(selectedBooks)

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
                                    <p className="whitespace-break-spaces">{book.volumeInfo.description}</p>
                            </div>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
