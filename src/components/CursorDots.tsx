"use client";

import { useEffect } from "react";

export function CursorDots() {
  useEffect(() => {
    const root = document.documentElement;

    const onMove = (e: MouseEvent) => {
      root.style.setProperty("--cx", `${e.clientX}px`);
      root.style.setProperty("--cy", `${e.clientY}px`);
    };

    const onLeave = () => {
      root.style.setProperty("--cx", "-2000px");
      root.style.setProperty("--cy", "-2000px");
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <>
      {/* Layer 1: Base dots — tiny blue, always visible, very subtle */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 1,
          backgroundImage:
            "radial-gradient(circle, rgba(96,165,250,0.1) 0.8px, transparent 0.8px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Layer 2: Violet gradient spotlight — very low intensity */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 2,
          background:
            "radial-gradient(circle 380px at var(--cx, -2000px) var(--cy, -2000px), rgba(139,92,246,0.07) 0%, rgba(139,92,246,0.02) 60%, transparent 100%)",
        }}
      />

      {/* Layer 3: Slightly brighter blue dots revealed at cursor */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 3,
          backgroundImage:
            "radial-gradient(circle, rgba(96,165,250,0.55) 0.8px, transparent 0.8px)",
          backgroundSize: "28px 28px",
          WebkitMaskImage:
            "radial-gradient(circle 300px at var(--cx, -2000px) var(--cy, -2000px), black 0%, rgba(0,0,0,0.5) 55%, transparent 100%)",
          maskImage:
            "radial-gradient(circle 300px at var(--cx, -2000px) var(--cy, -2000px), black 0%, rgba(0,0,0,0.5) 55%, transparent 100%)",
        }}
      />
    </>
  );
}
