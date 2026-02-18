import Link from "next/link";

export default function ProfilePage() {
    return <div>
        My profile
        <Link href="/profile/mybooks">My books</Link>
    </div>
}