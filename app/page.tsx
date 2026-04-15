import GenreList from "@/components/homepage/genre-list";
import SearchForm from "@/components/homepage/search-form";

export default function Home() {
	return (
		<div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
			<main className="flex min-h-screen w-full max-w-3xl items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
				<div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
					<h2>Select your date</h2>
					<GenreList />
				</div>
				<div className="flex flex-col items-center gap-4 text-center sm:items-start sm:text-left">
					<SearchForm />
				</div>
			</main>
		</div>
	);
}
