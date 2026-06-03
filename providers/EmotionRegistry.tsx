"use client";

import * as React from "react";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { useServerInsertedHTML } from "next/navigation";

export default function EmotionRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const [{ cache, flush }] = React.useState(() => {
    const cache = createCache({ key: "mui" });
    cache.compat = true;

    const inserted: string[] = [];

    const flush = () => {
      const styles = cache.inserted;
      const names = Object.keys(styles);

      const newStyles = names
        .filter((name) => !inserted.includes(name))
        .map((name) => {
          inserted.push(name);
          return styles[name];
        })
        .join("");

      return newStyles;
    };

    return { cache, flush };
  });

  useServerInsertedHTML(() => {
    const styles = cache.inserted;
    return (
      <style
        data-emotion={`${cache.key}`}
        dangerouslySetInnerHTML={{
          __html: Object.values(styles).join(""),
        }}
      />
    );
  });

  return <CacheProvider value={cache}>{children}</CacheProvider>;
}
