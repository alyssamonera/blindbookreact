"use client";

import { bookResult } from "@/shared/types";
import TileFooter from "./tileFooter";
import { useEffect, useState } from "react";

export default function Tile({book, onRemove}: {book: bookResult, onRemove: (id: string) => void}) {
    const [description, setDescription] = useState<string>('');

    // Since this is blank on pageload, need to use this to avoid hydration error
    useEffect(() => {
        if (book?.volumeInfo?.description) {
            setDescription(book.volumeInfo.description);
        }
    }, [book]);

    return (
        <li key={book.id} className="bg-white border rounded-lg shadow p-4 flex flex-col">
            <div className="flex-1 border-b-2 border-gray-200 mb-4">
                <h3 className="text-lg font-semibold mb-2">{book.volumeInfo.title}</h3>
                <p className="text-sm text-gray-600 mb-4">by {book.volumeInfo.authors.join(", ")}</p>
                <div className="text-sm text-gray-700 mb-4 max-h-50 overflow-y-auto">
                    <p dangerouslySetInnerHTML={{ __html: description }}></p>
                </div>
            </div>
            <TileFooter book={book} onRemove={onRemove} />
        </li>
    );
}