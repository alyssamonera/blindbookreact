import { bookResult } from "@/shared/types";

export const limit = 10;
export const genres = {
	romance: {
		displayValue: "Romance",
		searchValue: "love+fiction",
	},
	memoir: {
		displayValue: "Memoir",
		searchValue: "personal_memoirs",
	},
	"science%20fiction": {
		displayValue: "Sci-Fi",
		searchValue: "science_fiction",
	},
	fantasy: {
		displayValue: "Fantasy",
		searchValue: "fantasy",
	},
} as const;
export const alphabet = [
	"A",
	"B",
	"C",
	"D",
	"E",
	"F",
	"G",
	"H",
	"I",
	"J",
	"K",
	"L",
	"M",
	"N",
	"O",
	"P",
	"Q",
	"R",
	"S",
	"T",
	"U",
	"V",
	"W",
	"X",
	"Y",
	"Z",
];

export const DUMMY_BOOKS: bookResult[] = [
	{
		id: "1",
		volumeInfo: {
			description: "This is the skin of a monster Bella",
			authors: ["Stephenie Meyer"],
			title: "Twilight",
		},
		censoredDescription: "This is the skin of a monster Bella",
	},
	{
		id: "2",
		volumeInfo: {
			description: "Hey loca where you been",
			authors: ["Stephenie Meyer"],
			title: "New Moon",
		},
		censoredDescription: "Hey loca where you been",
	},
	{
		id: "3",
		volumeInfo: {
			description: "The angel from that one cancelled show is in this one",
			authors: ["Stephenie Meyer"],
			title: "Breaking Dawn",
		},
		censoredDescription: "The angel from that one cancelled show is in this one",
	},
	{
		id: "4",
		volumeInfo: {
			description:
				"Paladin tries and fails to kill a goddess and somehow they end up together",
			authors: ["Author"],
			title: "Daughter of the Sun",
		},
		censoredDescription:
			"Paladin tries and fails to kill a goddess and somehow they end up together",
	},
	{
		id: "5",
		volumeInfo: {
			description: "Your hair is like starlight!",
			authors: ["Diana Wynne Jones"],
			title: "Howl's Moving Castle",
		},
		censoredDescription: "Your hair is like starlight!",
	},
	{
		id: "6",
		volumeInfo: {
			description: "A beauty and the beast metaphor",
			authors: ["Sarah J. Maas"],
			title: "A Court of Fey and Flowers",
		},
		censoredDescription: "A beauty and the beast metaphor",
	},
	{
		id: "7",
		volumeInfo: {
			description: "A lot of parkour and a love triangle",
			authors: ["I Forget"],
			title: "Steeplejack",
		},
		censoredDescription: "A lot of parkour and a love triangle",
	},
	{
		id: "8",
		volumeInfo: {
			description: "I vant to suck your blad",
			authors: ["Bram Stoker"],
			title: "Dracula",
		},
		censoredDescription: "I vant to suck your blad",
	},
	{
		id: "9",
		volumeInfo: {
			description: "A guy creates another guy all by himself",
			authors: ["Mary Shelley"],
			title: "Frankenstein",
		},
		censoredDescription: "A guy creates another guy all by himself",
	},
	{
		id: "10",
		volumeInfo: {
			description: "Mr. Darcy fumbles the bag multiple times until he doesn't",
			authors: ["Jane Austen"],
			title: "Pride & Prejudice",
		},
		censoredDescription: "Mr. Darcy fumbles the bag multiple times until he doesn't",
	},
];
