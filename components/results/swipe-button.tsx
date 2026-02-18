"use client";

import { BooksContext } from "@/app/context/books-context"
import { bookResult } from "@/shared/types";
import { useContext } from "react"

type SwipeProps = {
    direction: string,
    book?: bookResult
}

export default function SwipeButton({direction, book}: SwipeProps) {
    const {handleSwipe} = useContext(BooksContext);

    return <button onClick={() => handleSwipe(direction, book)} className="px-5 bg-fuchsia-400 cursor-pointer m-2" title={`Swipe ${direction}`}>
        {direction === 'left' && <>&lt;</>}
        {direction === 'right' && <>&gt;</>}
    </button>
}