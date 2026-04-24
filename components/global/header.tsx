import { logout } from "@/lib/actions/login";
import { auth } from "@/lib/auth/server";
import Link from "next/link";

export default async function Header() {
	const { data: session } = await auth.getSession();

	return (
		<header className="flex gap-4">
			<div><h1 className="font-bold hover:underline"><Link href="/">Blind Book Dating</Link></h1></div>
			<ul className="flex gap-4">
				<li className="hover:underline"><Link href="/books/demo">Demo</Link></li>
				{session?.user && <>
				<li className="hover:underline"><Link href="/profile">Profile</Link></li>
				<li><button onClick={logout} className="cursor-pointer hover:underline">Logout</button></li>
				</>}
				{(!session || !session?.user) && <li className="hover:underline"><Link href="/login">Login</Link></li>}
			</ul>
		</header>
	);
}
