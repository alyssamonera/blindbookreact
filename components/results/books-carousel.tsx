"use client";

import { notFound } from "next/navigation";
import { useContext, useEffect } from "react";
import { BooksContext } from "@/app/context/books-context";
import { bookResult } from "@/shared/types";
import BookDisplay from "./book-display";
import SwipeButton from "./swipe-button";

type BooksCarouselProps = {
	books: bookResult[];
};

export default function BooksCarousel({ books }: BooksCarouselProps) {
	if (books.length === 0) {
		return <div>No books found in the carousel</div>;
	}

	const { currentIndex, hasReachedEnd, resetIndex, handleMaxIndex } = useContext(BooksContext);
	const book = books[currentIndex];

	// On pageload, reset the index back to 0
	useEffect(() => {
		resetIndex();
		handleMaxIndex(books.length);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [books]);

	if (hasReachedEnd) {
		return <div className="text-center"><h3 className="text-lg font-bold">Out of books</h3> <p>Pick another genre or come back and try again later.</p></div>
	}

	return (
		<div className="mx-auto w-full max-w-xl relative">
			<BookDisplay book={book} />
			<div className="flex justify-between mt-4">
				<SwipeButton direction="left" />
				<SwipeButton direction="right" book={book} />
			</div>

		</div>
	);
}
