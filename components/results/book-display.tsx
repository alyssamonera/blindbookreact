import { bookResult } from "@/shared/types";

type BookDisplayProps = {
	book: bookResult;
};

export default function BookDisplay({ book }: BookDisplayProps) {
	return (
		<li
			key={book.id}
			className="h-full min-h-[420px] flex items-center justify-center p-8 md:p-10 whitespace-break-spaces bg-white/80 backdrop-blur-xl border border-white/70 text-custom-brown-dark shadow-2xl shadow-black/20 list-none rounded-3xl text-lg leading-relaxed"
		>
			{book.censoredDescription}
		</li>
	);
}
