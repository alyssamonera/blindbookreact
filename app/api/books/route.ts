import { NextResponse } from "next/server";
import { getBooks } from "@/lib/books";

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const slug = url.searchParams.get("slug") ?? "";
    const q = url.searchParams.get("q") ?? undefined;
    const userId = url.searchParams.get("userId") ?? "";

    const signal = (req as any).signal as AbortSignal | undefined;

    const books = await getBooks(slug, q, userId, signal);
    return NextResponse.json({ books }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "server error" }, { status: 500 });
  }
}