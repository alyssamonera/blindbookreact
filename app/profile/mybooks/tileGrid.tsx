"use client";

import { bookResult } from "@/shared/types";
import TileFooter from "./tileFooter";
import { useState } from "react";

export default function TileGrid({ books }: { books: bookResult[] }) {
    const [selectedBooks, setSelectedBooks] = useState<bookResult[]>(books);

    function handleRemove(bookId: string) {
        setSelectedBooks((prev) => prev.filter((book) => book.id !== bookId));
    }

    return (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {selectedBooks.map((book) => {
                return (
                    <li key={book.id} className="bg-white border rounded-lg shadow p-4 flex flex-col">
                        <div className="flex-1 border-b-2 border-gray-200 mb-4">
                            <h3 className="text-lg font-semibold mb-2">{book.volumeInfo.title}</h3>
                            <p className="text-sm text-gray-600 mb-4">by {book.volumeInfo.authors.join(", ")}</p>
                            <div className="text-sm text-gray-700 mb-4 max-h-50 overflow-y-auto">
                                <p dangerouslySetInnerHTML={{ __html: book.volumeInfo.description }}></p>
                            </div>
                        </div>
                        <TileFooter book={book} onRemove={handleRemove} />
                    </li>
                );
            })}
        </ul>
    );
}