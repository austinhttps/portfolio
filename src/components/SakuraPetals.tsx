"use client";

import React, { useEffect, useRef } from "react";
import { useTheme } from "@/context/ThemeContext";

interface Petal {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  swaySpeed: number;
  swayAmplitude: number;
  swayOffset: number;
}

export function SakuraPetals() {
  const { petalsEnabled } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!petalsEnabled) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    const petalCount = Math.min(Math.floor(width / 45), 35);
    const petals: Petal[] = [];

    for (let i = 0; i < petalCount; i++) {
      petals.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 8 + 7,
        speedX: Math.random() * 0.8 + 0.3,
        speedY: Math.random() * 1.2 + 0.6,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 1.5,
        opacity: Math.random() * 0.4 + 0.35,
        swaySpeed: Math.random() * 0.02 + 0.01,
        swayAmplitude: Math.random() * 1.5 + 0.5,
        swayOffset: Math.random() * Math.PI * 2,
      });
    }

    let frame = 0;

    const render = () => {
      frame++;
      ctx.clearRect(0, 0, width, height);

      // Dark mode glowing cherry blossom palette
      const petalFill = "rgba(255, 183, 197, 0.45)";
      const petalBorder = "rgba(255, 140, 170, 0.35)";

      petals.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX + Math.sin(frame * p.swaySpeed + p.swayOffset) * p.swayAmplitude;
        p.rotation += p.rotationSpeed;

        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }
        if (p.x > width + 20) {
          p.x = -20;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);

        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(
          p.size / 2,
          -p.size / 2,
          p.size,
          -p.size / 4,
          p.size,
          p.size / 2
        );
        ctx.bezierCurveTo(
          p.size / 2,
          p.size,
          -p.size / 2,
          p.size / 2,
          0,
          0
        );

        ctx.fillStyle = petalFill;
        ctx.fill();

        ctx.lineWidth = 0.5;
        ctx.strokeStyle = petalBorder;
        ctx.stroke();

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [petalsEnabled]);

  if (!petalsEnabled) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10 select-none overflow-hidden"
      aria-hidden="true"
    />
  );
}
