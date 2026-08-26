"use client";

import { BooksContext } from "@/app/context/books-context"
import { bookResult } from "@/shared/types";
import { useContext } from "react"

type SwipeProps = {
    direction: string,
    book?: bookResult,
    onBeforeSwipe?: (direction: string) => void
}

export default function SwipeButton({direction, book, onBeforeSwipe}: SwipeProps) {
    const {handleSwipe} = useContext(BooksContext);
    const btnStyle = direction === 'left'
        ? 'bg-custom-rose hover:bg-custom-brown-dark border-red-800'
        : 'bg-custom-sage-dark hover:bg-custom-cream border-green-800';

    function onClick() {
        onBeforeSwipe?.(direction);
        handleSwipe(direction, book);
    }

    return <button
        onClick={onClick}
        className={`h-full w-16 md:w-20 flex items-center justify-center ${btnStyle} text-custom-brown-dark hover:text-${direction == 'left' ? 'custom-cream' : 'black'} transition-colors duration-300 ease-in-out cursor-pointer rounded-3xl shadow-lg shadow-black/10 border  focus:border-2 focus:border-black`}
        title={`Swipe ${direction}`}
    >
        {direction === 'left' && (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M6 6l12 12M18 6L6 18" />
            </svg>
        )}
        {direction === 'right' && (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 13l4 4L19 7" />
            </svg>
        )}
    </button>
}
