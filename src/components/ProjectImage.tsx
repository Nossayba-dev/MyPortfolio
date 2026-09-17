import { useState, type ReactNode } from "react";

/**
 * Renders `fallback` (default: nothing) instead of a broken-image icon if the
 * file isn't there yet — so a project can reference a screenshot/logo before
 * the asset exists, and it just starts appearing once the file is added.
 */
export function ProjectImage({
  src,
  alt,
  className,
  fallback = null,
}: {
  src: string;
  alt: string;
  className?: string;
  fallback?: ReactNode;
}) {
  const [failed, setFailed] = useState(false);
  if (failed) return <>{fallback}</>;

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}
