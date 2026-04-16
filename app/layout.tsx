import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BooksContextProvider from "./context/books-context";
import Header from "@/components/global/header";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Blind Book Dating",
	description: "A new way to find your next book",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased mx-5`}
			>
				<Header />
				<BooksContextProvider>{children}</BooksContextProvider>
				<div id="modal"></div>
			</body>
		</html>
	);
}
