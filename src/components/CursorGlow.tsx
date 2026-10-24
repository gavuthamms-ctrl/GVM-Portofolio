import React, { useEffect, useState } from 'react';

export const CursorGlow: React.FC = () => {
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    // Only enable if hover is supported
    if (!window.matchMedia('(hover: hover)').matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!pos) return null;

  return (
    <div
      className="cursor-glow"
      style={{
        left: `${pos.x}px`,
        top: `${pos.y}px`,
      }}
    />
  );
};
