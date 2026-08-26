"use client";

import { createPortal } from "react-dom";
import { motion } from "motion/react";

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
            <motion.div
                className="absolute inset-0 bg-black"
                onClick={onClose}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
            />
            <motion.div
                className="bg-white relative rounded-lg p-5 pt-10 z-10"
                initial={{ opacity: 0, scale: 0.95, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
            >
                {children}
            </motion.div>
        </div>, modalRoot
    );
}
