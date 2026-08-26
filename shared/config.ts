import { bookResult } from "@/shared/types";

export const limit = 10;
export const genres = {
	romance: {
		displayValue: "Romance",
		searchValue: "love+fiction",
		normalized: "romance",
		svg: `<path d="M12 20.5S3 15 3 8.7C3 5.6 5.2 3.5 8 3.5c1.8 0 3.3 1 4 2.6.7-1.6 2.2-2.6 4-2.6 2.8 0 5 2.1 5 5.2 0 6.3-9 11.8-9 11.8z" />`,
		color: "from-rose-300 to-pink-800"
	},
	memoir: {
		displayValue: "Memoir",
		searchValue: "personal_memoirs",
		normalized: "memoir",
		svg: `<path d="M19 3c-4 1-9 5.5-11 10.5L6.5 17 10 14.5C15 12.5 19.5 7.5 19 3z" />
                <path d="M11.5 12.5L5 19" />
                <ellipse cx="5.5" cy="19.5" rx="2.5" ry="1.3" />`,
		color: "from-blue-500 to-blue-900"
	},
	"science%20fiction": {
		displayValue: "Sci-Fi",
		searchValue: "science_fiction",
		normalized: "science fiction",
		svg: ` <circle cx="12" cy="12" r="1.7" fill="currentColor" stroke="none" />
                <ellipse cx="12" cy="12" rx="9" ry="3.6" />
                <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(60 12 12)" />
                <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(120 12 12)" />`,
		color: "from-lime-400 to-emerald-700"
	},
	fantasy: {
		displayValue: "Fantasy",
		searchValue: "fantasy",
		normalized: "fantasy",
		svg: `<path d="M12 3l3 11.5c-1-.5-1.9-.8-3-.8s-2 .3-3 .8L12 3z" />
                <path d="M4 18.5c2.2-1.3 5-2 8-2s5.8.7 8 2" />
                <path d="M4 18.5c0 1 3.6 1.8 8 1.8s8-.8 8-1.8" />
                <path d="M12 5.2l.6 1.8" strokeWidth="1.3" />`,
		color: "from-fuchsia-500 to-violet-900"
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
