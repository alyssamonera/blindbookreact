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
        <div className="footer">
            <button onClick={() => setShowModal(true)} className="bg-red-800 hover:bg-red-500 text-white px-4 py-1 rounded cursor-pointer">Remove</button>
            {showModal && <RemoveBook volumeInfo={book.volumeInfo} bookId={book.id} onClose={handleClose} onRemove={onRemove} />}
        </div>
    );
}
