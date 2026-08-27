"use client";

import { useState } from "react";
import Link from "next/link";
import { logout } from "@/lib/actions/login";
import HeaderLink from "./header-link";

export default function HeaderNav({ hasSession }: { hasSession: boolean }) {
	const [open, setOpen] = useState(false);
	const hamburgerSpanClass = "block h-0.5 w-6 bg-custom-brown duration-300"
	const logClass = `cursor-pointer lowercase bg-custom-brown text-custom-cream px-5 py-2 rounded-full font-semibold hover:bg-background hover:text-custom-brown-dark transition-colors duration-300 focus:border-white login`

	return (
		<>
			{/* Desktop + Tablet */}
			<div className="hidden sm:flex sm:items-center sm:justify-between sm:gap-4 sm:flex-1">
				<ul className="flex flex-wrap items-center gap-4 md:gap-6 text-custom-brown">
					<HeaderLink><Link href="/" className="font-bold normal-case">Blind Book Dating</Link></HeaderLink>
					<HeaderLink><Link href="/about">About</Link></HeaderLink>
					<HeaderLink><Link href="/books/demo">Demo</Link></HeaderLink>
					{hasSession && <HeaderLink><Link href="/profile/mybooks">Your matches</Link></HeaderLink>}
					<HeaderLink><a href="https://github.com/alyssamonera/blindbookreact">Github</a></HeaderLink>
					<HeaderLink><a href="https://alyssamoneracom.wordpress.com/">Portfolio</a></HeaderLink>
				</ul>
				<ul className="flex items-center">
					{hasSession
						? <HeaderLink><button onClick={logout} className={logClass}>Logout</button></HeaderLink>
						: <HeaderLink><Link href="/login" className={logClass + " inline-block"}>Login</Link></HeaderLink>}
				</ul>
			</div>

			{/* Mobile */}
			<Link href="/" className="sm:hidden order-first font-bold normal-case pt-serif-regular text-custom-brown">Blind Book Dating</Link>
			<div className="sm:hidden flex items-center gap-3">
				<button
					type="button"
					onClick={() => setOpen((prev) => !prev)}
					aria-expanded={open}
					aria-controls="mobile-menu"
					aria-label={open ? "Close menu" : "Open menu"}
					className="cursor-pointer flex flex-col justify-center items-center gap-1.5 w-9 h-9 rounded-md"
				>
					<span className={`transition-transform ${hamburgerSpanClass} ${open ? "translate-y-2 rotate-45" : ""}`} />
					<span className={`transition-opacity ${hamburgerSpanClass} ${open ? "opacity-0" : ""}`} />
					<span className={`transition-transform ${hamburgerSpanClass} ${open ? "-translate-y-2 -rotate-45" : ""}`} />
				</button>
				{hasSession
					? <button onClick={logout} className={logClass}>Logout</button>
					: <Link href="/login" className={logClass + ' inline-block'}>Login</Link>}
			</div>

			{open && (
				<ul id="mobile-menu" className="sm:hidden absolute left-4 right-4 top-full mt-2 flex flex-col gap-1 text-custom-brown bg-white/90 backdrop-blur-md border border-white/60 shadow-lg shadow-black/10 rounded-2xl p-4 lowercase pt-serif-regular">
					<HeaderLink><Link href="/about" onClick={() => setOpen(false)}>About</Link></HeaderLink>
					<HeaderLink><Link href="/books/demo" onClick={() => setOpen(false)}>Demo</Link></HeaderLink>
					{hasSession && <HeaderLink><Link href="/profile/mybooks" onClick={() => setOpen(false)}>Your matches</Link></HeaderLink>}
					<HeaderLink><a href="https://github.com/alyssamonera/blindbookreact">Github</a></HeaderLink>
					<HeaderLink><a href="https://alyssamoneracom.wordpress.com/">Portfolio</a></HeaderLink>
				</ul>
			)}
		</>
	);
}
