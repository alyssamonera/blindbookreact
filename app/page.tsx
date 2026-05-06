import GenreList from "@/components/homepage/genre-list";
import SearchForm from "@/components/homepage/search-form";

export default function Home() {
	return (
		<div className="flex items-center justify-center dark:bg-black">
			<main className="flex w-full max-w-3xl items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
				<div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
					<h2 className="text-lg font-bold">Select your date</h2>
				<GenreList />
				</div>
				<div className="flex flex-col items-center gap-4 text-center sm:items-start sm:text-left">
					<SearchForm />
				</div>
			</main>
		</div>
	);
}
