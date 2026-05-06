import { ReactNode } from "react";

export default function HeaderLink({ children }: { children: React.ReactNode }) {
    return <li className="hover:underline hover:text-white transition-colors duration-300">
        {children}
    </li>
}