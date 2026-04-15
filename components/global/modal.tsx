"use client";

import { createPortal } from "react-dom";

export default function Modal({ children, onClose }: { children: React.ReactNode; onClose: () => void }) {
    // ensure we have a non-null Element for the portal
    let modalRoot = typeof document !== "undefined" ? document.getElementById("modal") : null;
    if (!modalRoot && typeof document !== "undefined") {
        modalRoot = document.createElement("div");
        modalRoot.id = "modal";
        document.body.appendChild(modalRoot);
    }

    if (!modalRoot) return null;

    return createPortal(
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black opacity-50" onClick={onClose} />
            <div className="bg-white relative rounded-lg p-4 pt-10 z-10">
                {children}
            </div>
        </div>, modalRoot
    );
}
