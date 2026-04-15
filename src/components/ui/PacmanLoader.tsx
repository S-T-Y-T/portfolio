"use client";

export function PacmanLoader() {
  return (
    <div className="loader-wrapper rotate-180">
      <div className="packman"></div>
      <div className="dots">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  );
}
