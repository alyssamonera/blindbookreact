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
		id: "test-1",
		volumeInfo: {
			description: "In the summer of 1816, Mary Wollstonecraft Godwin, then eighteen years old, began to write the novel Frankenstein after she and her lover Percy Bysshe Shelley took part in a ghost-story competition at Lord Byron's villa by Lake Geneva. Over the next nine months -- a period which saw their return to England in autumn 1816 and subsequent marriage -- she (with Percy) drafted the entire novel in a form materially different from the two standard editions of 1818 and 1831 which were based on a later fair copy. Until now, no one has been able to read what Mary Shelley herself initially wrote in this original draft of the novel. Going back to the unique draft manuscript of the text held in the Bodleian Library, Charles E. Robinson has teased out Percy Shelley's amendments, isolating them from the story in Mary Shelley's hand. Both texts - with and without Percy's interventions - are presented in this edition, allowing us for the first time to read the story in Mary's original hand and also to see how Percy edited his wife's prose. The results are fascinating. We read a more rapidly paced novel that is arranged in different chapters. Above all, we hear Mary's genuine voice which sounds to us more modern, more immediately colloquial than her husband's learned, more polished style. To this day, Frankenstein remains the most popular work of science fiction. This edition promises to redefine the ways we read the story and perceive the act of its creation.",
			authors: [
				'Mary Wollstonecraft Shelley',
				'Percy Bysshe Shelley'
			],
			title: "Frankenstein, Or, The Modern Prometheus",
		},
		censoredDescription: "This is the skin of a monster Bella",
	},
	{
		id: "test-2",
		volumeInfo: {
			description: "Camry Parker knows rough-and-ready Virginia City is no place for an unmarried girl. But Nick Trelstad is nothing but a dusty silver miner, with more arrogance than one man has a right to possess. She vows never to belong to him in any sense of the word. But Nick has other plans.",
			authors: [
				'Stef Ann Holm'
			],
			title: "Silver Desires",
		},
		censoredDescription: "This is the skin of a monster Bella",
	},
	{
		id: "test-3",
		volumeInfo: {
			description: "How does an LA sophisticate like rock star Bryan Spencer woo a small-town African-American girl like Callie Lawson? Bryan has come to a small Alabama town to recover after the death of his best friend. The small town is suffocating him until he meets Callie, triggering a contest between LA sin and Southern Sunday school. Bryan and Callie must overcome racial issues, the treacherous nature of the entertainment industry and the clash between urban sophistication and rural values if they are going to stay together.",
			authors: [
				'Roslyn Hardy Holcomb'
			],
			title: "Rock Star",
		},
		censoredDescription: "This is the skin of a monster Bella",
	}, 
	{
		id: "test-4",
		volumeInfo: {
			description: "In the city of St. Catharines, Ontario, Dr. L.C. Swan practiced as the only veterinarian for almost forty yers. Wether the case at hand was the birth of a calf, or providing psychotherapy for Fido's mistress, it was of prime importance to this dedicated man.",
			authors: ["Leonard Clifton Swan"],
			title: "Hello, Doctor! I've Got a Dog"
		},
		censoredDescription: ""
	}, 
	{
		id: "test-5",
		volumeInfo: {
			description: "The controversy she creates at school, her mother's strange behavior, and her sudden friendship with her best friend's secret love leaves thirteen-year-old Summer in a state of confusion.",
			authors: ["Sandy Asher"],
			title: "Summer Smith Begins"
		},
		censoredDescription: ""
	}

];
