"use client";

import { useEffect, useState } from "react";
import BooksCarousel from "./books-carousel";
import type { bookResult } from "@/shared/types";
import LoadingPageRoot from "@/app/loading";

export default function BooksLoaderClient({
  slug,
  q,
  userId,
}: {
  slug: string;
  q?: string;
  userId?: string;
}) {
  const [books, setBooks] = useState<bookResult[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    setBooks(null);
    setError(null);

    const params = new URLSearchParams();
    params.set("slug", slug);
    if (q) params.set("q", q);
    if (userId) params.set("userId", userId);

    fetch(`/api/books?${params.toString()}`, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error(`status ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setBooks(data?.books ?? []);
      })
      .catch((err) => {
        if (err.name === "AbortError") return; // expected when navigating away
        console.error(err);
        setError("Failed to load books");
      });

    return () => {
      controller.abort();
    };
  }, [slug, q, userId]);

  if (error || books?.length === 0) return <div className="text-center">Something went wrong. Please try again in a bit.</div>;
  if (books === null) return <LoadingPageRoot />;

  return <BooksCarousel books={books} />;
}