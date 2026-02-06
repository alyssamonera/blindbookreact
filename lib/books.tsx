import { franc } from "franc-min";
import { limit, alphabet } from "@/config";

type apiSearchResults = {
	key: string;
	authors: string[];
}[];

type apiBookData = {
	title: string;
	authors: string[];
	description: string | { value: string } | void;
};

type modelSearchResults = {
	id: string;
	authors: string[];
	description: string;
	title: string;
};

/**
 * Simplifies description down to a string and filters for English
 * @param data - The book data that came back from the API
 * @returns Either an empty string or the description string value
 */
function getDescription(data: apiBookData) {
	let description = data.description;

	if (!description) {
		return "";
	}

	if (typeof description === "object") {
		description = description.value;
	}

	if (franc(description) === "eng") {
		return description;
	}

	return "";
}

/**
 * Picks out a random range of results from the API, within the configured limit
 * @param apiSearchResults - All of the books that came back from the API
 * @returns A random integer for the index value
 */
function getRandomRange(apiSearchResults: apiSearchResults) {
	const max = apiSearchResults.length - limit;
	const min = 0;

	return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Replaces all instances of the title and author from the description string
 * @param books The selected array of simplified book objects 
 * @returns The selected array of simplified book objects, now with censored descriptions
 */
function censorBooks(books: modelSearchResults[]) {
	for (let i = 0; i < books.length; i++) {
		const currentBook = books[i];

		books[i].description = currentBook.description.replaceAll(
			currentBook.title,
			"TITLE",
		);

		currentBook.authors.forEach((author: string, index) => {
			const assignedLetter =
				currentBook.authors.length > 1 ? " " + alphabet[index] : "";
			const authorRegex = new RegExp(`\\b${author}\\b`, "gi");

			const lastName = author.trim().split(/\s+/).pop() ?? "";
			const lastNameRegex = new RegExp(`\\b${lastName}\\b`, "gi");

			const authorString = "AUTHOR" + assignedLetter;
			const lastNameString = "LAST NAME" + assignedLetter;

			books[i].description = books[i].description
				.replaceAll(authorRegex, authorString)
				.replaceAll(lastNameRegex, lastNameString);
		});
	}

	return books;
}

/**
 * Collects more detailed book data via the keys taken from the API
 * @param apiSearchResults All the book data from the API
 * @returns An array of simplified book data that only includes what we need
 */
async function batchFetchBooks(apiSearchResults: apiSearchResults) {
	let results: {
		id: string;
		title: string;
		authors: string[];
		description: string;
	}[] = [];
	const allResponses = [];
	const startPoint = getRandomRange(apiSearchResults);

	for (let i = startPoint; i < apiSearchResults.length; i += limit) {
		const batch = apiSearchResults.slice(i, i + limit);
		const currentBatchOfResponses = await Promise.all(
			batch.map((searchResult) =>
				fetch(`https://openlibrary.org/${searchResult.key}.json`, {
					headers: {
						"User-Agent": "BlindBookDatingApp/1.0 (alyssamonera@gmail.com)",
					},
				})
					.then((r) => r.json())
					.then((data: apiBookData) => ({
						id: searchResult.key,
						title: data.title,
						authors: [...searchResult.authors],
						description: getDescription(data),
					})),
			),
		);

		allResponses.push(
			...currentBatchOfResponses.filter((book) => book.description !== ""),
		);

		if (allResponses.length >= 10) {
			results = allResponses.slice(0, 10);
			break;
		}

		await new Promise((r) => setTimeout(r, 300));
	}

	return results;
}

/**
 * Gets the book descriptions based on user-selected keywords
 * @returns An array of books with censored descriptions
 */
export async function getBooks() {
	const response = await fetch(
		"https://openlibrary.org/search.json?subject=love+fantasy&limit=500&language=eng&fields=key,title,author_name",
		{
			headers: {
				"User-Agent": "BlindBookDatingApp/1.0 (alyssamonera@gmail.com)",
			},
		},
	);
	const resData = await response.json();

	if (!response.ok) {
		throw new Error("Failed to fetch books.");
	}

	const apiSearchResults = resData.docs.map(
		(doc: { key: string; author_name: string[] }) => ({
			key: doc.key,
			authors: doc.author_name,
		}),
	);

	const books = await batchFetchBooks(apiSearchResults);
	const censoredBooks = censorBooks(books);

	return censoredBooks;
}
