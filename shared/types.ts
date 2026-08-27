import { genres } from "./config";

export type genreInput = keyof typeof genres;

export type genreType = {
	displayValue: string,
	searchValue: string,
	svg: string,
	color: string
}

export type bookResult = {
	id: string;
	volumeInfo: {
		authors: string[];
		description: string;
		title: string;
	};
	censoredDescription: string;
	genre?: string;
};