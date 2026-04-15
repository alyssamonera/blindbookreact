import Link from "next/link";

export default function ProfilePage() {
    return <div className="text-center">
        <h1 className="text-2xl font-bold">My profile</h1>
        <span className="hover:underline">
            <Link href="/profile/mybooks">My books</Link>
        </span>
    </div>
}