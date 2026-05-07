import GenreList from "@/components/homepage/genre-list";
import SearchForm from "@/components/homepage/search-form";

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center dark:bg-black">
			<div className="text-center w-1/1 mb-2">
				<h1 className="lowercase text-4xl font-bold pt-serif-bold">Blind Book Dating</h1>
				<span className="pt-serif-bold-italic">Don't judge a book by its cover!</span>
			</div>
			<main className="flex flex-col sm:flex-row w-full max-w-3xl items-center justify-between py-8 px-16 bg-white border-2 border-amber-950 text-black rounded-md sm:items-start">
				<div className="flex flex-col items-center gap-2 text-center sm:items-start sm:text-left">
					<h2 className="text-lg font-bold">Select your date</h2>
					<GenreList />
				</div>
				<div className="flex flex-col items-center gap-4 mt-5 text-center sm:items-start sm:text-left">
					<SearchForm />
				</div>
			</main>
		</div>
	);
}
