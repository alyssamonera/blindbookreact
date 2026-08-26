"use client";

import { motion, PanInfo, useMotionValue, useTransform } from "motion/react";
import { bookResult } from "@/shared/types";
import BookDisplay from "./book-display";

const SWIPE_THRESHOLD = 100;
const EXIT_DISTANCE = 500;
const INDICATOR_RANGE = 120;

const cardVariants = {
	initial: { opacity: 0 },
	animate: { x: 0, opacity: 1 },
	exit: (direction: number) => ({
		x: direction * EXIT_DISTANCE,
		opacity: 0,
		transition: { duration: 0.3, ease: "easeIn" as const },
	}),
};

type SwipeableCardProps = {
	book: bookResult;
	onSwipe: (direction: "left" | "right") => void;
};

export default function SwipeableCard({ book, onSwipe }: SwipeableCardProps) {
	const x = useMotionValue(0);
	const passOpacity = useTransform(x, [-INDICATOR_RANGE, -20], [1, 0]);
	const likeOpacity = useTransform(x, [20, INDICATOR_RANGE], [0, 1]);

	function onDragEnd(_e: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) {
		if (Math.abs(info.offset.x) < SWIPE_THRESHOLD) return;
		onSwipe(info.offset.x > 0 ? "right" : "left");
	}

	return (
		<motion.div
			key={book.id}
			variants={cardVariants}
			initial="initial"
			animate="animate"
			exit="exit"
			drag="x"
			style={{ x }}
			dragConstraints={{ left: -EXIT_DISTANCE, right: EXIT_DISTANCE }}
			dragElastic={1}
			onDragEnd={onDragEnd}
			transition={{ duration: 0.2 }}
			className="relative flex-grow"
		>
			<motion.div
				style={{ opacity: passOpacity }}
				className="pointer-events-none absolute top-6 left-6 z-10 flex items-center justify-center w-14 h-14 rounded-full bg-custom-rose text-custom-cream shadow-lg"
			>
				<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
					<path d="M6 6l12 12M18 6L6 18" />
				</svg>
			</motion.div>
			<motion.div
				style={{ opacity: likeOpacity }}
				className="pointer-events-none absolute top-6 right-6 z-10 flex items-center justify-center w-14 h-14 rounded-full bg-custom-sage-dark text-custom-cream shadow-lg"
			>
				<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
					<path d="M5 13l4 4L19 7" />
				</svg>
			</motion.div>
			<BookDisplay book={book} />
		</motion.div>
	);
}
