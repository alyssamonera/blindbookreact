"use client";

import { notFound } from "next/navigation";
import { useContext } from "react";
import { BooksContext } from "@/app/context/books-context";
import { bookResult } from "@/shared/types"
import BookDisplay from "./book-display"
import SwipeButton from "./swipe-button";

type BooksCarouselProps = {
    books: bookResult[]
}

export default function BooksCarousel({books}: BooksCarouselProps) {
    if (books.length === 0) {
        notFound();
    }

    const { currentIndex } = useContext(BooksContext);
    const book = books[currentIndex];

    return <div>
        <BookDisplay book={book} />
        <SwipeButton direction="left" />
        <SwipeButton direction="right" book={book} />
    </div>
}