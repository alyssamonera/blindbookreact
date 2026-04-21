"use client";

import { bookResult } from "@/shared/types";
import Tile from "./tile";
import { useState } from "react";

export default function TileGrid({ books }: { books: bookResult[] }) {
    const [selectedBooks, setSelectedBooks] = useState<bookResult[]>(books);

    function handleRemove(bookId: string) {
        setSelectedBooks((prev) => prev.filter((book) => book.id !== bookId));
    }

    return (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {selectedBooks.map((book) => {
                return <Tile key={book.id} book={book} onRemove={() => handleRemove(book.id)} />
            })}
        </ul>
    );
}