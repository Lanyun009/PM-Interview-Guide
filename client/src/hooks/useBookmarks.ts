// useBookmarks — persists bookmarked question IDs in localStorage
// Design: PM War Room — dark navy, indigo accent

import { useState, useCallback } from "react";

const STORAGE_KEY = "pm-ref-bookmarks";

function loadBookmarks(): Set<number> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return new Set();
    return new Set(JSON.parse(raw) as number[]);
  } catch {
    return new Set();
  }
}

function saveBookmarks(set: Set<number>) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(set)));
  } catch {
    // ignore storage errors
  }
}

export function useBookmarks() {
  const [bookmarks, setBookmarks] = useState<Set<number>>(() => loadBookmarks());

  const toggle = useCallback((id: number) => {
    setBookmarks((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      saveBookmarks(next);
      return next;
    });
  }, []);

  const isBookmarked = useCallback(
    (id: number) => bookmarks.has(id),
    [bookmarks]
  );

  const count = bookmarks.size;

  return { bookmarks, toggle, isBookmarked, count };
}
