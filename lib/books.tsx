import { franc } from "franc-min";
const limit = 10;

function getDescription(data: {
	description: string | { value: string } | void;
}) {
	let description = data.description;

	if (!description) {
		return null;
	}

	if (typeof description === "object") {
		description = description.value;
	}

	if (franc(description) === "eng") {
		return description;
	}

	return null;
}

function getRandomRange(keys: string[]) {
	const max = keys.length - limit;
	const min = 0;

	return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function batchFetchBooks(keys: string[]) {
	const results = [];
    const startPoint = getRandomRange(keys);

	for (let i = startPoint; i < keys.length; i+= limit) {
		const batch = keys.slice(i, i + limit);
		const arrayOfResponses = await Promise.all(
			batch.map((key) =>
				fetch(`https://openlibrary.org/${key}.json`, {
					headers: {
						"User-Agent": "BlindBookDatingApp/1.0 (alyssamonera@gmail.com)",
					},
				}).then((r) => r.json())
                .then((data) => ({id: key, description: getDescription(data)}))
			),
		);

        results.push(...arrayOfResponses.filter(book => !!book.description));

        if (results.length >= 10) {
            break;
        }

        await new Promise(r => setTimeout(r, 300));
	}

	return results;
}

export async function getBooks() {
	const response = await fetch(
		"https://openlibrary.org/search.json?subject=romance&limit=500&language=eng",
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

	const keys = resData.docs.map((doc: { key: string }) => doc.key);

	const books = await batchFetchBooks(keys);

	return books;
}
