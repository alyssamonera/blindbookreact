"use client";

import { useState } from "react";
import RemoveBook from "@/components/forms/remove-book";
import { bookResult } from "@/shared/types";

export default function TileFooter({ book, onRemove }: { book: bookResult; onRemove: (bookId: string) => void }) {
    const [showModal, setShowModal] = useState(false);

    function handleClose() {
        setShowModal(false);
    }

    return (
        <>
            <button
                onClick={() => setShowModal(true)}
                title="Remove book"
                className="absolute top-3 left-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white border border-red-800 text-red-800 hover:bg-red-800 hover:text-white transition-colors duration-300 cursor-pointer  focus:border-2 focus:border-black"
            >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M6 6l12 12M18 6L6 18" />
                </svg>
            </button>
            {showModal && <RemoveBook volumeInfo={book.volumeInfo} bookId={book.id} onClose={handleClose} onRemove={onRemove} />}
        </>
    );
}
