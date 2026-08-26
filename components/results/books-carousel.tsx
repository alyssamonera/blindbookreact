"use client";

import { useContext, useEffect, useState } from "react";
import { AnimatePresence } from "motion/react";
import { BooksContext } from "@/app/context/books-context";
import { bookResult } from "@/shared/types";
import SwipeButton from "./swipe-button";
import SwipeableCard from "./swipeable-card";

type BooksCarouselProps = {
	books: bookResult[];
};

export default function BooksCarousel({ books }: BooksCarouselProps) {
	if (books.length === 0) {
		return <div>No books found in the carousel</div>;
	}

	const { currentIndex, hasReachedEnd, handleSwipe, resetIndex, handleMaxIndex } = useContext(BooksContext);
	const book = books[currentIndex];
	const [exitDirection, setExitDirection] = useState(0);

	function onSwipe(direction: "left" | "right") {
		setExitDirection(direction === "right" ? 1 : -1);
		handleSwipe(direction, book);
	}

	// On pageload, reset the index back to 0
	useEffect(() => {
		resetIndex();
		handleMaxIndex(books.length);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [books]);

	if (hasReachedEnd) {
		return <div className="text-center"><h3 className="text-lg font-bold pt-serif-regular text-custom-brown-dark">Out of books</h3> <p className="text-custom-brown">Pick another genre or come back and try again later.</p></div>
	}

	return (
		<div className="mx-auto w-full max-w-3xl relative px-4">
			<div className="text-center my-8">
				<h1 className="lowercase text-4xl italic font-medium pt-serif-regular-italic text-custom-brown-dark">Time To Swipe</h1>
				<p className="mt-2 text-sm text-custom-brown/70">Swipe left to pass, swipe right to like — or use the buttons</p>
			</div>
			<div className="flex items-stretch justify-center gap-3 md:gap-4">
				<div className="hidden md:flex">
					<SwipeButton direction="left" onBeforeSwipe={() => setExitDirection(-1)} />
				</div>
				<AnimatePresence mode="wait" custom={exitDirection}>
					<SwipeableCard key={book.id} book={book} onSwipe={onSwipe} />
				</AnimatePresence>
				<div className="hidden md:flex">
					<SwipeButton direction="right" book={book} onBeforeSwipe={() => setExitDirection(1)} />
				</div>
			</div>
		</div>
	);
}
