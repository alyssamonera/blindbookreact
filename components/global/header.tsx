import { logout, getSession } from "@/lib/actions/login";
import Link from "next/link";
import HeaderLink from "./header-link";

export default async function Header() {
	const session = await getSession();

	return (
		<div className="p-4 sm:p-6">
			<header className="flex flex-wrap items-center justify-between gap-4 lowercase pt-serif-regular bg-white/55 backdrop-blur-md border border-white/60 shadow-lg shadow-black/10 rounded-full px-6 py-3">
				<ul className="flex flex-wrap items-center gap-4 md:gap-6 text-custom-brown">
					<HeaderLink><Link href="/" className="font-bold normal-case   focus:border-2 focus:border-black">Blind Book Dating</Link></HeaderLink>
					<HeaderLink><Link href="/about" className="  focus:border-2 focus:border-black">About</Link></HeaderLink>
					<HeaderLink><Link href="/books/demo" className="  focus:border-2 focus:border-black">Demo</Link></HeaderLink>
					{session?.user && <>
						<HeaderLink><Link href="/profile/mybooks" className="  focus:border-2 focus:border-black">Your matches</Link></HeaderLink>
					</>}
					<HeaderLink><a href="https://github.com/alyssamonera/blindbookreact" className="  focus:border-2 focus:border-black">Github</a></HeaderLink>
					<HeaderLink><a href="https://alyssamoneracom.wordpress.com/" className="  focus:border-2 focus:border-black">Portfolio</a></HeaderLink>
				</ul>
				<ul className="flex items-center">
					{session?.user
						? <HeaderLink><button onClick={logout} className="cursor-pointer lowercase bg-custom-brown text-custom-cream px-5 py-2 rounded-full font-semibold hover:bg-background hover:text-custom-brown-dark transition-colors duration-300   focus:border-2 focus:border-white">Logout</button></HeaderLink>
						: <HeaderLink><Link href="/login" className="bg-custom-brown text-custom-cream px-5 py-2 rounded-full font-semibold hover:bg-background hover:text-custom-brown-dark transition-colors duration-300 inline-block   focus:border-2 focus:border-white">Login</Link></HeaderLink>}
				</ul>
			</header>
		</div>
	);
}
