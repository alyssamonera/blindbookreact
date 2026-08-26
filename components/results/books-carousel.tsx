"use client";

import { notFound } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { AnimatePresence, motion, PanInfo } from "motion/react";
import { BooksContext } from "@/app/context/books-context";
import { bookResult } from "@/shared/types";
import BookDisplay from "./book-display";
import SwipeButton from "./swipe-button";

type BooksCarouselProps = {
	books: bookResult[];
};

const SWIPE_THRESHOLD = 100;
const EXIT_DISTANCE = 500;

const cardVariants = {
	initial: { x: 0, opacity: 0 },
	animate: { x: 0, opacity: 1 },
	exit: (direction: number) => ({
		x: direction * EXIT_DISTANCE,
		opacity: 0,
		transition: { duration: 0.3, ease: "easeIn" as const },
	}),
};

export default function BooksCarousel({ books }: BooksCarouselProps) {
	if (books.length === 0) {
		return <div>No books found in the carousel</div>;
	}

	const { currentIndex, hasReachedEnd, handleSwipe, resetIndex, handleMaxIndex } = useContext(BooksContext);
	const book = books[currentIndex];
	const [exitDirection, setExitDirection] = useState(0);

	function onDragEnd(_e: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) {
		if (Math.abs(info.offset.x) < SWIPE_THRESHOLD) return;
		const direction = info.offset.x > 0 ? 1 : -1;
		setExitDirection(direction);
		handleSwipe(direction > 0 ? "right" : "left", book);
	}

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
			<div className="text-center my-8">
				<h1 className="text-2xl font-bold">Time To Swipe</h1>
			</div>
			<AnimatePresence mode="wait" custom={exitDirection}>
				<motion.div
					key={book.id}
					custom={exitDirection}
					variants={cardVariants}
					initial="initial"
					animate="animate"
					exit="exit"
					drag="x"
					dragConstraints={{ left: -EXIT_DISTANCE, right: EXIT_DISTANCE }}
					dragElastic={1}
					onDragEnd={onDragEnd}
					transition={{ duration: 0.2 }}
				>
					<BookDisplay book={book} />
				</motion.div>
			</AnimatePresence>
			<div className="hidden md:flex justify-between mt-4">
				<SwipeButton direction="left" onBeforeSwipe={(direction) => setExitDirection(direction === "right" ? 1 : -1)} />
				<SwipeButton direction="right" book={book} onBeforeSwipe={(direction) => setExitDirection(direction === "right" ? 1 : -1)} />
			</div>

		</div>
	);
}
