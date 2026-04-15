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

    return <form action={submitSearch}>
        <h2>Or search for another</h2>
        <input type="text" className="bg-white text-black border-black border p-2" name="searchQuery" />
        <button className="border p-2 cursor-pointer">Search</button>
    </form>
}