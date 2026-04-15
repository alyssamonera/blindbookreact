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
    const btnStyle = direction === 'left' ? 'bg-red-400 hover:bg-red-800 hover:text-white' : 'bg-green-400 hover:bg-green-800 hover:text-white';

    return <button onClick={() => handleSwipe(direction, book)} className={`px-5 ${btnStyle} transition-all duration-300 ease-in-out cursor-pointer m-2 rounded-lg`} title={`Swipe ${direction}`}>
        {direction === 'left' && <>&lt;</>}
        {direction === 'right' && <>&gt;</>}
    </button>
}