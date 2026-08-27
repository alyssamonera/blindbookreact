import { getSession } from "@/lib/actions/login";
import HeaderNav from "./header-nav";

export default async function Header() {
	const session = await getSession();

	return (
		<div className="p-4 sm:p-6">
			<header className="relative flex flex-wrap items-center justify-between gap-4 lowercase pt-serif-regular bg-white/55 backdrop-blur-md border border-white/60 shadow-lg shadow-black/10 rounded-full px-6 py-3">
				<HeaderNav hasSession={!!session?.user} />
			</header>
		</div>
	);
}
