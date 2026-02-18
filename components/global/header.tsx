import Link from "next/link";

export default function Header() {
	return (
		<header className="flex gap-4">
			<div><h1 className="font-bold"><Link href="/">Blind Book Dating</Link></h1></div>
			<ul>
				<li><Link href="/profile">Profile</Link></li>
			</ul>
		</header>
	);
}
