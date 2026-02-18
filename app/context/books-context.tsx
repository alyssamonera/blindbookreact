"use client";

import { createContext, useState } from "react";
import { bookResult } from "@/shared/types";

type BooksContextObject = {
	currentIndex: number;
	selectedBooks: bookResult[];
	handleSwipe: (direction: string, book?: bookResult) => void;
	resetIndex: () => void;
};

export const BooksContext = createContext<BooksContextObject>({
	currentIndex: 0,
	selectedBooks: [],
	handleSwipe: () => {},
	resetIndex: () => {}
});

const BooksContextProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [selectedBooks, setSelectedBooks] = useState<bookResult[]>([]);

	function saveBookToProfile(book: bookResult) {
		// TODO: Connect to database
		setSelectedBooks((currentBooks) => [book, ...currentBooks]);
	}

	function handleSwipe(direction: string, book?: bookResult) {
		setCurrentIndex((index) => index + 1);

		if (direction === "right" && book) {
			saveBookToProfile(book);
		}
	}

	function resetIndex() {
		setCurrentIndex(0);
	}

	const ctx: BooksContextObject = {
		currentIndex,
		selectedBooks,
		handleSwipe,
		resetIndex
	};

	return <BooksContext.Provider value={ctx}>{children}</BooksContext.Provider>;
};

export default BooksContextProvider;
