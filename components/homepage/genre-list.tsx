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
		<form onSubmit={handleSubmit} className="flex gap-2 items-center">
			<select required className="bg-gray-300 p-3 rounded" name="genre" defaultValue="">
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
			<button className="block bg-green-800 hover:bg-green-400 text-white hover:text-black cursor-pointer px-3 py-2 rounded">Go</button>
		</form>
	);
}
