import Link from "next/link";

export default function Header() {
	return (
		<header className="flex justify-between">
			<div><Link href="/">Blind Book Dating</Link></div>
			<ul>
				<li><Link href="/profile">Profile</Link></li>
			</ul>
		</header>
	);
}
