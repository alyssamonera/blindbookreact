import Link from "next/link";
import { genres } from "@/shared/config";
import { genreInput } from "@/shared/types";

export default function GenreList() {
	return (
		<ul>
			{Object.keys(genres).map((key) => {
				const genre = genres[key as genreInput];
				return (
					<li key={genre.searchValue} className="hover:underline">
						<Link href={`/books/${key}`}>{genre.displayValue}</Link>
					</li>
				);
			})}
			<li key="fairytale">
				<Link href="/books/search?q=fairytale">Fairytale</Link>
			</li>
		</ul>
	);
}
