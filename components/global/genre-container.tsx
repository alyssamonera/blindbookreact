import GenreIcon from "@/components/global/genre-icon";
import {genres} from '@/shared/config'
import {genreInput} from "@/shared/types"

function normalizeGenre(genre?: string): string {
    if (!genre) return "";
    let decoded = genre;
    try { decoded = decodeURIComponent(genre); } catch { return "" }
    return decoded.toLowerCase().replace(/[^a-z]/g, " ").trim();
}

export default function GenreContainer({ genre }: { genre?: string }) {
    let gradientClass = 'from-background to-custom-sage-dark'
    const genreList = Object.keys(genres)

    const normalized = normalizeGenre(genre);
    for (const knownGenre of genreList) {
        const genreObject = genres[knownGenre as genreInput]
        if (normalized.includes(genreObject.normalized)) {
            gradientClass = genreObject.color
        }
    }

    return <div className={`w-full h-80 flex items-center justify-center bg-gradient-to-br ${gradientClass}`}>
        <GenreIcon genre={normalized} className="w-24 h-24 text-custom-brown-dark" />
    </div>
}