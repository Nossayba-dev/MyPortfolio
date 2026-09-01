import { useEffect, useState } from "react";

/**
 * Reads a media query and re-renders on change. State is seeded synchronously so
 * the first paint is already correct — `display: none` would still download the
 * image, whereas not rendering it at all doesn't.
 */
export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches);

  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = () => setMatches(mql.matches);
    onChange();
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [query]);

  return matches;
}
