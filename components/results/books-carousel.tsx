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

	const { currentIndex, resetIndex, handleMaxIndex } = useContext(BooksContext);
	handleMaxIndex(books.length);
	const book = books[currentIndex];

	// On pageload, reset the index back to 0
	useEffect(() => {
		resetIndex();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div>
			<BookDisplay book={book} />
			<SwipeButton direction="left" />
			<SwipeButton direction="right" book={book} />
		</div>
	);
}
