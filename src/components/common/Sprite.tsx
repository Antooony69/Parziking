import { useState, type CSSProperties } from "react";

interface SpriteProps {
  sources: string[];
  alt: string;
  className?: string;
  style?: CSSProperties;
}

export const Sprite = ({ sources, alt, className, style }: SpriteProps) => {
  const key = sources.join("|");
  const [failed, setFailed] = useState({ key, index: 0 });
  const index = failed.key === key ? failed.index : 0;

  if (index >= sources.length) return null;

  return (
    <img
      src={sources[index]}
      alt={alt}
      className={className}
      style={style}
      loading="lazy"
      decoding="async"
      onError={() => setFailed({ key, index: index + 1 })}
    />
  );
};
