"use client";

import Modal from "../global/modal";
import { useState } from "react";
import { bookResult } from "@/shared/types";

export default function RemoveBook({ volumeInfo, bookId, onClose, onRemove }: { volumeInfo: bookResult["volumeInfo"]; bookId: string; onClose: () => void; onRemove: (bookId: string) => void }) {
    const [isLoading, setIsLoading] = useState(false);

    async function handleRemove() {
        setIsLoading(true);
        const result = await fetch('/api/remove-book', {
			method: "POST",
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify({bookId})
		});
        setIsLoading(false);
        if (result.ok) {
            onRemove(bookId);
            onClose();
        } else {
            alert("Failed to remove book. Please try again.");
        }
    }

    return (
        <Modal onClose={onClose}>
            <h2 className="pt-serif-regular text-xl">Are you sure you want to remove <span className="font-semibold"><span className="italic">{volumeInfo.title}</span> by {volumeInfo.authors.join(", ")}</span>?</h2>
            <div className="flex justify-end gap-2 mt-4">
                <button
                    onClick={onClose}
                    className="bg-custom-brown/30 text-custom-brown hover:bg-custom-brown-dark hover:text-custom-cream px-5 py-2 rounded-full font-medium cursor-pointer transition-colors duration-300 focus:outline-none focus:border-2 focus:border-black"
                >
                    Cancel
                </button>
                <button
                    onClick={handleRemove}
                    disabled={isLoading}
                    className="bg-red-900 text-white hover:bg-white hover:text-red-900 border border-red-900 px-5 py-2 rounded-full font-medium cursor-pointer transition-colors duration-300 focus:outline-none focus:border-2 focus:border-black disabled:opacity-60 disabled:cursor-not-allowed"
                >
                    {isLoading ? "Removing..." : "Remove"}
                </button>
            </div>
        </Modal>
    );
}