import { useState } from "react";

/**
 * Portrait photo with a graceful fallback: if the image file isn't present
 * (or fails to load) the gradient monogram is shown instead, so the hero
 * never renders a broken-image icon.
 */
export function Portrait({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="portrait portrait-fallback" role="img" aria-label={alt}>
        <span>NA</span>
      </div>
    );
  }

  return (
    <img
      className="portrait"
      src={src}
      alt={alt}
      width={960}
      height={1280}
      loading="eager"
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}
