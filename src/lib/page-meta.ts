import { useEffect } from "react";

export type MetaTag = { title: string } | { name: string; content: string } | { property: string; content: string };

/**
 * Client-side replacement for TanStack's per-route `head()`: sets the document title and
 * upserts <meta> tags while the page is mounted, restoring the previous values on unmount.
 */
export function usePageMeta(tags: MetaTag[]) {
  const key = JSON.stringify(tags);

  useEffect(() => {
    const restore: Array<() => void> = [];

    for (const tag of tags) {
      if ("title" in tag) {
        const previous = document.title;
        document.title = tag.title;
        restore.push(() => {
          document.title = previous;
        });
        continue;
      }

      const attr = "name" in tag ? "name" : "property";
      const value = "name" in tag ? tag.name : tag.property;
      let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${value}"]`);
      if (el) {
        const prevContent = el.content;
        el.content = tag.content;
        const existing = el;
        restore.push(() => {
          existing.content = prevContent;
        });
      } else {
        el = document.createElement("meta");
        el.setAttribute(attr, value);
        el.content = tag.content;
        document.head.appendChild(el);
        const created = el;
        restore.push(() => created.remove());
      }
    }

    return () => {
      for (const undo of restore.reverse()) undo();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);
}
