import { bookResult } from "@/shared/types";

type BookDisplayProps = {
	book: bookResult;
};

export default function BookDisplay({ book }: BookDisplayProps) {
	return (
		<li
			key={book.id}
			className="p-3 whitespace-break-spaces border-green-900 border-3 list-none rounded-xl"
		>
			{book.censoredDescription}
		</li>
	);
}
