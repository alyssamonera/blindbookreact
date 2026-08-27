import GenreList from "@/components/homepage/genre-list";
import SearchForm from "@/components/homepage/search-form";

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center px-4 pb-16">
			<div className="text-center mt-16 mb-2">
				<h1 className="lowercase text-6xl italic font-medium pt-serif-regular-italic text-custom-brown-dark">Blind Book Dating</h1>
				<span className="block mt-4 text-xl italic pt-serif-regular-italic text-custom-brown-dark opacity-85">Don't judge a book by its cover!</span>
			</div>
			<main className="w-full max-w-xl mt-10 bg-white/80 backdrop-blur-xl border border-white/70 shadow-2xl shadow-black/20 rounded-3xl p-10">
				<div className="flex flex-col items-center gap-2 text-center mb-6">
					<span className="text-xs uppercase tracking-widest font-semibold text-custom-sage-dark">Step 1</span>
					<h2 className="text-2xl font-medium pt-serif-regular text-custom-brown-dark">Select your date</h2>
				</div>
				<GenreList />
				<div className="flex items-center gap-4 my-7">
					<div className="flex-grow h-px bg-custom-brown/15" />
					<span className="text-xs uppercase tracking-widest text-custom-brown/55">Or search for another</span>
					<div className="flex-grow h-px bg-custom-brown/15" />
				</div>
				<SearchForm />
			</main>
		</div>
	);
}
