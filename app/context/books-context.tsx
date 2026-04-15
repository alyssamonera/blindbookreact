"use client";

import { createContext, useState } from "react";
import { bookResult } from "@/shared/types";

type BooksContextObject = {
	currentIndex: number;
	handleSwipe: (direction: string, book?: bookResult) => void;
	resetIndex: () => void;
	handleMaxIndex: (index: number) => void;
};

export const BooksContext = createContext<BooksContextObject>({
	currentIndex: 0,
	handleSwipe: () => {},
	resetIndex: () => {},
	handleMaxIndex: () => {},
});

const BooksContextProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [maxIndex, setMaxIndex] = useState<number | null>(null);

	async function saveBookToProfile(book: bookResult) {
		const result = await fetch('/api/like-book', {
			method: "POST",
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify({bookId: book.id})
		});

		// TODO: Error handling
	}

	function handleSwipe(direction: string, book?: bookResult) {
		if (maxIndex && currentIndex >= maxIndex - 1) {
			return; // prevent going past the end
		}

		setCurrentIndex((index) => index + 1);

		if (direction === "right" && book) {
			saveBookToProfile(book);
		}
	}

	function resetIndex() {
		setCurrentIndex(0);
	}

	function handleMaxIndex(index: number) {
		setMaxIndex(index);
	}

	const ctx: BooksContextObject = {
		currentIndex,
		handleSwipe,
		resetIndex,
		handleMaxIndex,
	};

	return <BooksContext.Provider value={ctx}>{children}</BooksContext.Provider>;
};

export default BooksContextProvider;
