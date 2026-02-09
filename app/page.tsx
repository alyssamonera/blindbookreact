import Link from "next/link";
import { genres } from "@/shared/config";
import { genreInput } from "@/shared/types";

export default function Home() {
	return (
		<div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
			<main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
				<div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
					<h1>Start your date</h1>
					<ul>
						{Object.keys(genres).map((key) => {
							const genre = genres[key as genreInput];
							return <li key={genre.searchValue}>
								<Link href={`/books/${key}`}>{genre.displayValue}</Link>
							</li>
						})}
					</ul>
				</div>
			</main>
		</div>
	);
}
