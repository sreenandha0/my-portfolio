function AnimatedBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Pink glow */}
      <div className="neon-glow neon-glow-pink" />

      {/* Cyan glow */}
      <div className="neon-glow neon-glow-cyan" />

      {/* Purple glow */}
      <div className="neon-glow neon-glow-purple" />

      {/* Developer grid */}
      <div className="developer-grid" />
    </div>
  );
}

export default AnimatedBackground;