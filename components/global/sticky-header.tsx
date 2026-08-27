"use client";

import { useEffect, useRef, useState } from "react";

const FADE_THRESHOLD = 120;

export default function StickyHeader({ children }: { children: React.ReactNode }) {
	const [hidden, setHidden] = useState(false);
	const lastY = useRef(0);

	useEffect(() => {
		lastY.current = window.scrollY;

		function onScroll() {
			const y = window.scrollY;
			const goingDown = y > lastY.current;

			if (goingDown && y > FADE_THRESHOLD) {
				setHidden(true);
			} else {
				setHidden(false);
			}

			lastY.current = y;
		}

		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<div
			className={`sticky top-0 z-100 sm:static p-4 sm:p-6 transition-opacity duration-300 ${hidden ? "opacity-0 pointer-events-none sm:opacity-100 sm:pointer-events-auto" : "opacity-100"}`}
		>
			{children}
		</div>
	);
}
