import { useMemo } from "react";

function SakuraPetals() {
  const petals = useMemo(() => {
    return Array.from({ length: 18 }, (_, index) => ({
      id: index,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 10 + 8}px`,
      delay: `${Math.random() * -15}s`,
      duration: `${Math.random() * 8 + 10}s`,
      drift: `${Math.random() * 120 - 60}px`,
      opacity: Math.random() * 0.4 + 0.25,
    }));
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {petals.map((petal) => (
        <span
          key={petal.id}
          className="sakura-petal"
          style={{
            left: petal.left,
            width: petal.size,
            height: petal.size,
            opacity: petal.opacity,
            animationDelay: petal.delay,
            animationDuration: petal.duration,
            "--drift": petal.drift,
          }}
        />
      ))}
    </div>
  );
}

export default SakuraPetals;