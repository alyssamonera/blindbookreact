"use client";

import Modal from "@/components/global/modal";
import Genre from "@/components/global/genre-container";
import { bookResult } from "@/shared/types";

export default function BookProfileModal({ book, description, onClose }: { book: bookResult; description: string; onClose: () => void }) {

    return (
        <Modal onClose={onClose}>
            <button
                onClick={onClose}
                title="Close"
                className="absolute top-3 left-3 w-8 h-8 flex items-center justify-center rounded-full bg-white border border-custom-brown/20 text-custom-brown hover:bg-custom-brown-dark hover:text-custom-cream transition-colors duration-300 cursor-pointer focus:outline-none focus:border-2 focus:border-black"
            >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M6 6l12 12M18 6L6 18" />
                </svg>
            </button>
            <div className="max-w-md max-h-[80vh] overflow-y-auto px-5 py-4">
                <h2 className="text-xl font-semibold pt-serif-bold mb-1">{book.volumeInfo.title}</h2>
                <p className="text-sm text-gray-600 mb-4">by {book.volumeInfo.authors.join(", ")}</p>
                <p className="text-sm text-gray-700" dangerouslySetInnerHTML={{ __html: description }}></p>
            </div>
        </Modal>
    );
}
