import {genres} from '@/shared/config'
import {genreInput} from "@/shared/types"

export default function GenreIcon({ genre, className }: { genre: string; className?: string }) {
    const genreList = Object.keys(genres)

    for (const knownGenre of genreList) {
        const genreObject = genres[knownGenre as genreInput]
        if (genre.includes(genreObject.normalized)) {
            return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" dangerouslySetInnerHTML={{ __html: genreObject.svg }} />
        }
    }

    // Default: generic open book
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 6.5c-1.6-1.2-3.7-1.8-6-1.8v13c2.3 0 4.4.6 6 1.8" />
            <path d="M12 6.5c1.6-1.2 3.7-1.8 6-1.8v13c-2.3 0-4.4.6-6 1.8" />
            <path d="M12 6.5v13" />
        </svg>
    );
}
