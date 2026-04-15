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
            <h2>Are you sure you want to remove <span className="font-semibold"><span className="italic">{volumeInfo.title}</span> by {volumeInfo.authors.join(", ")}</span>?</h2>
            <div className="flex justify-end mt-4">
                <button className="bg-gray-300 p-2 mr-2 cursor-pointer" onClick={onClose}>
                    Cancel
                </button>
                <button className="bg-red-500 p-2 text-white cursor-pointer" onClick={handleRemove} disabled={isLoading}>
                    {isLoading ? "Removing..." : "Remove"}
                </button>
            </div>
        </Modal>
    );
}