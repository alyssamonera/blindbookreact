"use client";

import { genres } from "@/shared/config";
import { genreInput } from "@/shared/types";
import { redirect } from "next/navigation";

export default function GenreList() {
	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const genre = formData.get("genre");
		if (!genre) return;

		redirect(`/books/${genre}`);
	}

	return (
		<form onSubmit={handleSubmit} className="flex gap-3 items-center">
			<select required className="flex-grow bg-custom-input border border-custom-brown/10 text-custom-brown text-sm font-medium px-5 py-4 rounded-full cursor-pointer" name="genre" defaultValue="">
				<option value="" disabled>Pick a genre</option>
				{Object.keys(genres).map((key) => {
					const genre = genres[key as genreInput];
					return (
						<option key={genre.searchValue} value={key}>
							{genre.displayValue}
						</option>
					);
				})}
				<option key="fairytale" value="fairytale">
					Fairytale
				</option>
			</select>
			<button className="flex-shrink-0 bg-background/50 hover:bg-custom-brown-dark text-custom-green-dark hover:text-custom-cream font-semibold cursor-pointer px-8 py-4 rounded-full shadow-lg shadow-background/40 transition-colors duration-300   focus:border-2 focus:border-black">Go</button>
		</form>
	);
}
