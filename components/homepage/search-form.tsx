import { redirect } from "next/navigation";

export default function SearchForm() {
    async function submitSearch(formData: FormData) {
        'use server';

        const searchQuery = formData.get('searchQuery');

        if (!searchQuery || typeof searchQuery !== 'string') {
            return;
        }

        redirect(`/books/search?q=${searchQuery}`);
    }

    return <form action={submitSearch} className="flex items-center gap-1 bg-custom-input border border-custom-brown/10 rounded-full pl-5 pr-1 py-1">
        <input type="text" placeholder="Keyword" className="flex-grow bg-transparent text-custom-brown text-sm py-3 px-2 outline-none" name="searchQuery" />
        <button className="flex-shrink-0 rounded-full py-3 px-6 cursor-pointer bg-custom-brown text-custom-cream hover:bg-background hover:text-custom-brown-dark font-semibold text-sm transition-colors duration-300   focus:border-2 focus:border-black">Search</button>
    </form>
}