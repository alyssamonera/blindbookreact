import { genres } from "./config";

export type genreInput = keyof typeof genres;

export type genreType = {
    displayValue: string,
    searchValue: string
}

export type bookResult = {
	id: string;
	volumeInfo: {
		authors: string[];
		description: string;
		title: string;
	};
};