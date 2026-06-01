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
      {/* Base dot grid */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 1,
          backgroundImage:
            "radial-gradient(circle, rgba(96,165,250,0.12) 0.9px, transparent 0.9px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Wide ambient glow that follows cursor */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 2,
          background:
            "radial-gradient(circle 500px at var(--cx, -2000px) var(--cy, -2000px), rgba(103,232,249,0.03) 0%, rgba(167,139,250,0.02) 50%, transparent 100%)",
          transition: "background 0.1s ease",
        }}
      />

      {/* Bright cursor spotlight */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 3,
          background:
            "radial-gradient(circle 140px at var(--cx, -2000px) var(--cy, -2000px), rgba(103,232,249,0.08) 0%, rgba(167,139,250,0.03) 50%, transparent 100%)",
        }}
      />

      {/* Highlighted dots at cursor */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 4,
          backgroundImage:
            "radial-gradient(circle, rgba(103,232,249,0.7) 0.9px, transparent 0.9px)",
          backgroundSize: "28px 28px",
          WebkitMaskImage:
            "radial-gradient(circle 220px at var(--cx, -2000px) var(--cy, -2000px), black 0%, rgba(0,0,0,0.4) 60%, transparent 100%)",
          maskImage:
            "radial-gradient(circle 220px at var(--cx, -2000px) var(--cy, -2000px), black 0%, rgba(0,0,0,0.4) 60%, transparent 100%)",
        }}
      />
    </>
  );
}
