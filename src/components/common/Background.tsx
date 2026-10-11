import { useMemo, type CSSProperties } from "react";

const COUNT = 35;

const particleStyle = (): CSSProperties => {
  const size = Math.random() > 0.7 ? 2 : 1;
  return {
    left: `${Math.random() * 100}%`,
    width: size,
    height: size,
    "--dur": `${6 + Math.random() * 14}s`,
    "--delay": `${-Math.random() * 20}s`,
    "--dx": `${(Math.random() - 0.5) * 80}px`,
    "--op": 0.05 + Math.random() * 0.12,
  } as CSSProperties;
};

export const Background = () => {
  const particles = useMemo(() => Array.from({ length: COUNT }, particleStyle), []);

  return (
    <div className="particles" aria-hidden="true">
      {particles.map((style, index) => (
        <span key={index} className="particle" style={style} />
      ))}
    </div>
  );
};
