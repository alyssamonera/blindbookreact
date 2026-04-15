import { redirect } from "next/navigation";
import { auth } from "@/lib/auth/server";

export default async function ProfileLayout({ children }: { children: React.ReactNode }) {
    const { data: session } = await auth.getSession();

    if (!session?.user) {
        redirect("/login");
    }

    return <>
        {children}
    </>
}
