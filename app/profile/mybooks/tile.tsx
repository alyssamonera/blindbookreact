"use client";

import { bookResult } from "@/shared/types";
import Genre from "@/components/global/genre-container";
import TileFooter from "./tileFooter";
import BookProfileModal from "./book-profile-modal";
import { useEffect, useState } from "react";

export default function Tile({book, onRemove}: {book: bookResult, onRemove: (id: string) => void}) {
    const [description, setDescription] = useState<string>('');
    const [showProfile, setShowProfile] = useState(false);

    // Since this is blank on pageload, need to use this to avoid hydration error
    useEffect(() => {
        if (book?.volumeInfo?.description) {
            setDescription(book.volumeInfo.description);
        }
    }, [book]);

    return (
        <li key={book.id} className="relative min-w-0 bg-white border rounded-2xl shadow-lg overflow-hidden flex flex-col mx-5 sm:mx-0">
            <TileFooter book={book} onRemove={onRemove} />
            <Genre genre={book.genre} />
            <div className="p-6 flex flex-col flex-1">
                <div className="mb-4">
                    <span className="block text-xs uppercase tracking-widest text-custom-sage-dark font-semibold">My name</span>
                    <span className="block text-xl pt-serif-bold mt-1 wrap-break-word">{book.volumeInfo.title}</span>
                </div>
                <div className="mb-4">
                    <span className="block text-xs uppercase tracking-widest text-custom-sage-dark font-semibold">My author</span>
                    <span className="block text-sm mt-1 wrap-break-word">{book.volumeInfo.authors.join(", ")}</span>
                </div>
                <div className="mb-4">
                    <span className="block text-xs uppercase tracking-widest text-custom-sage-dark font-semibold">About me</span>
                    <div className="text-sm mt-1 line-clamp-4 wrap-break-word">
                        <p dangerouslySetInnerHTML={{ __html: description }}></p>
                    </div>
                </div>
                <div className="text-right mt-auto">
                    <button
                        onClick={() => setShowProfile(true)}
                        className="text-sm font-medium text-custom-brown hover:text-custom-sage-dark underline cursor-pointer  focus:border-2 focus:border-black"
                    >
                        Read more
                    </button>
                </div>
            </div>
            {showProfile && <BookProfileModal book={book} description={description} onClose={() => setShowProfile(false)} />}
        </li>
    );
}
