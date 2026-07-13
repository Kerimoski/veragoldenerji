"use client";

import React, { useState, useRef } from "react";

interface ThreeDCardProps {
  children: React.ReactNode;
  className?: string;
}

export const ThreeDCard: React.FC<ThreeDCardProps> = ({ children, className = "" }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Mouse coordinates relative to the card
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Convert to percentage relative to center
    const xPct = (mouseX / width - 0.5) * 2;
    const yPct = (mouseY / height - 0.5) * 2;

    const maxRotation = 8; // gentle rotation
    setRotateY(xPct * maxRotation);
    setRotateX(-yPct * maxRotation);

    const glareX = (mouseX / width) * 100;
    const glareY = (mouseY / height) * 100;
    setGlarePosition({ x: glareX, y: glareY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-3xl overflow-hidden transition-all duration-300 ease-out cursor-pointer ${className}`}
      style={{
        transformStyle: "preserve-3d",
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${
          isHovered ? "1.015" : "1"
        }, ${isHovered ? "1.015" : "1"}, 1)`,
        boxShadow: isHovered
          ? "0 15px 30px rgba(0, 0, 0, 0.06), 0 0 20px rgba(197, 155, 39, 0.05)"
          : "0 4px 12px rgba(0, 0, 0, 0.03)",
      }}
    >
      {/* Glare Reflection overlay */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-10"
        style={{
          opacity: isHovered ? 0.4 : 0,
          background: `radial-gradient(circle 200px at ${glarePosition.x}% ${glarePosition.y}%, rgba(197, 155, 39, 0.08), transparent 70%)`,
        }}
      />
      {children}
    </div>
  );
};
