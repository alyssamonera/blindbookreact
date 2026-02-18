import { bookResult } from "@/shared/types";

type BookDisplayProps = {
	book: bookResult;
};

export default function BookDisplay({ book }: BookDisplayProps) {
	return (
		<li
			key={book.id}
			className="py-3 whitespace-break-spaces border-amber-600 border-3 list-none"
		>
			{book.volumeInfo.description}
		</li>
	);
}
