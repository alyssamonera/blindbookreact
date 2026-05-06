import { logout, getSession } from "@/lib/actions/login";
import Link from "next/link";
import HeaderLink from "./header-link";

export default async function Header() {
	const session = await getSession();

	return (
		<header className="header p-5 m-2 lowercase pt-serif-regular">
			<ul className="flex flex-wrap gap-10">
				<HeaderLink><Link href="/" className="font-bold">Blind Book Dating</Link></HeaderLink>
				<HeaderLink><Link href="/about">About</Link></HeaderLink>
				<HeaderLink><Link href="/books/demo">Demo</Link></HeaderLink>
				{session?.user && <>
					<HeaderLink><Link href="/profile/mybooks">Your matches</Link></HeaderLink>
					<HeaderLink><button onClick={logout} className="cursor-pointer lowercase">Logout</button></HeaderLink>
				</>}
				{(!session || !session?.user) && <HeaderLink><Link href="/login">Login</Link></HeaderLink>}
				<HeaderLink><a href="https://github.com/alyssamonera/blindbookreact">Github</a></HeaderLink>
				<HeaderLink><a href="https://alyssamoneracom.wordpress.com/">Portfolio</a></HeaderLink>
			</ul>
		</header>
	);
}
