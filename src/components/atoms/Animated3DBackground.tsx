'use client';

import React, { useEffect, useRef } from 'react';

interface Animated3DBackgroundProps {
  className?: string;
  intensity?: number;
}

export const Animated3DBackground: React.FC<Animated3DBackgroundProps> = ({
  className = '',
  intensity = 1.0,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let time = 0;
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;
    let scrollY = 0;
    let targetScrollY = 0;

    const handleResize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.parentElement?.clientHeight || window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseX = ((e.clientX - rect.left) / width - 0.5) * 2;
      targetMouseY = ((e.clientY - rect.top) / height - 0.5) * 2;
    };

    const handleScroll = () => {
      targetScrollY = window.scrollY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleResize();

    // Floating gold ambient particles
    const particleCount = 45;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random(),
      y: Math.random(),
      z: Math.random() * 400 + 100,
      radius: Math.random() * 1.6 + 0.4,
      speedX: (Math.random() - 0.5) * 0.0004,
      speedY: (Math.random() - 0.5) * 0.0004,
      alpha: Math.random() * 0.5 + 0.2,
      pulse: Math.random() * Math.PI * 2,
    }));

    // Definition of 3D sweeping luxury sine ribbons (champagne gold silk)
    interface RibbonSpec {
      baseY: number; // proportional 0-1
      amplitude: number;
      freqX: number;
      freqY: number;
      speed: number;
      phaseOffset: number;
      width: number;
      color: string;
      glowColor: string;
      meshDensity: number;
      tiltZ: number;
    }

    const ribbons: RibbonSpec[] = [
      {
        baseY: 0.38,
        amplitude: 70,
        freqX: 0.0016,
        freqY: 0.0022,
        speed: 0.008,
        phaseOffset: 0,
        width: 140,
        color: 'rgba(217, 184, 120, 0.42)',
        glowColor: 'rgba(245, 230, 202, 0.18)',
        meshDensity: 24,
        tiltZ: 180,
      },
      {
        baseY: 0.48,
        amplitude: 95,
        freqX: 0.0013,
        freqY: 0.0018,
        speed: 0.006,
        phaseOffset: 1.8,
        width: 180,
        color: 'rgba(196, 164, 106, 0.55)',
        glowColor: 'rgba(224, 207, 168, 0.25)',
        meshDensity: 28,
        tiltZ: 240,
      },
      {
        baseY: 0.62,
        amplitude: 85,
        freqX: 0.0015,
        freqY: 0.0019,
        speed: 0.009,
        phaseOffset: 3.4,
        width: 130,
        color: 'rgba(169, 135, 77, 0.48)',
        glowColor: 'rgba(217, 184, 120, 0.20)',
        meshDensity: 22,
        tiltZ: 120,
      },
      {
        baseY: 0.28,
        amplitude: 60,
        freqX: 0.0019,
        freqY: 0.0025,
        speed: 0.011,
        phaseOffset: 4.8,
        width: 100,
        color: 'rgba(224, 207, 168, 0.35)',
        glowColor: 'rgba(245, 230, 202, 0.15)',
        meshDensity: 18,
        tiltZ: 90,
      },
    ];

    const render = () => {
      time += 0.015 * intensity;

      // Smooth mouse easing
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;
      scrollY += (targetScrollY - scrollY) * 0.08;

      ctx.clearRect(0, 0, width, height);

      // Deep Midnight Navy radial ambient base
      const bgGradient = ctx.createRadialGradient(
        width * 0.5 + mouseX * 50,
        height * 0.45 + mouseY * 40,
        50,
        width * 0.5,
        height * 0.5,
        Math.max(width, height) * 0.85
      );
      bgGradient.addColorStop(0, 'rgba(26, 43, 71, 0.45)');
      bgGradient.addColorStop(0.5, 'rgba(16, 27, 46, 0.85)');
      bgGradient.addColorStop(1, 'rgba(10, 18, 31, 0.98)');

      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, width, height);

      // Render Floating 3D Gold Particles
      particles.forEach((p) => {
        p.pulse += 0.02;
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x < 0) p.x = 1;
        if (p.x > 1) p.x = 0;
        if (p.y < 0) p.y = 1;
        if (p.y > 1) p.y = 0;

        const px = p.x * width + mouseX * 25;
        const py = p.y * height + mouseY * 25 - scrollY * 0.15;
        const currentAlpha = p.alpha * (0.6 + 0.4 * Math.sin(p.pulse));

        ctx.beginPath();
        ctx.arc(px, py, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(224, 207, 168, ${currentAlpha})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = 'rgba(196, 164, 106, 0.7)';
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Render 3D Silk Ribbons & Mesh Filaments
      ribbons.forEach((ribbon, rIdx) => {
        const stepCount = 50;
        const stepWidth = (width + 300) / stepCount;
        const startX = -150;

        const upperPoints: { x: number; y: number; z: number }[] = [];
        const lowerPoints: { x: number; y: number; z: number }[] = [];

        const scrollInfluence = (scrollY * 0.0005 * (rIdx + 1));
        const currentPhase = time * ribbon.speed + ribbon.phaseOffset + scrollInfluence;

        for (let i = 0; i <= stepCount; i++) {
          const x = startX + i * stepWidth;
          const wave1 = Math.sin(x * ribbon.freqX + currentPhase) * ribbon.amplitude;
          const wave2 = Math.cos(x * ribbon.freqY - currentPhase * 0.8 + mouseX * 0.5) * (ribbon.amplitude * 0.6);
          const yCenter = height * ribbon.baseY + wave1 + wave2 + mouseY * 35;

          const z = Math.sin(x * 0.001 + currentPhase) * ribbon.tiltZ;
          const perspective = 600 / (600 + z);

          const dynamicWidth = ribbon.width * (0.7 + 0.3 * Math.sin(x * 0.002 + currentPhase));
          const halfW = (dynamicWidth * perspective) / 2;

          upperPoints.push({
            x: x + mouseX * (z * 0.08),
            y: yCenter - halfW,
            z,
          });
          lowerPoints.push({
            x: x + mouseX * (z * 0.08),
            y: yCenter + halfW,
            z,
          });
        }

        // Draw Filled Ribbon Body with Luxurious Specular Gradient
        ctx.beginPath();
        ctx.moveTo(upperPoints[0].x, upperPoints[0].y);
        for (let i = 1; i < upperPoints.length; i++) {
          const xc = (upperPoints[i].x + upperPoints[i - 1].x) / 2;
          const yc = (upperPoints[i].y + upperPoints[i - 1].y) / 2;
          ctx.quadraticCurveTo(upperPoints[i - 1].x, upperPoints[i - 1].y, xc, yc);
        }
        ctx.lineTo(upperPoints[upperPoints.length - 1].x, upperPoints[upperPoints.length - 1].y);

        for (let i = lowerPoints.length - 1; i >= 0; i--) {
          if (i === lowerPoints.length - 1) {
            ctx.lineTo(lowerPoints[i].x, lowerPoints[i].y);
          } else {
            const xc = (lowerPoints[i].x + lowerPoints[i + 1].x) / 2;
            const yc = (lowerPoints[i].y + lowerPoints[i + 1].y) / 2;
            ctx.quadraticCurveTo(lowerPoints[i + 1].x, lowerPoints[i + 1].y, xc, yc);
          }
        }
        ctx.closePath();

        const grad = ctx.createLinearGradient(0, height * 0.2, width, height * 0.8);
        grad.addColorStop(0, 'rgba(196, 164, 106, 0.04)');
        grad.addColorStop(0.3, ribbon.glowColor);
        grad.addColorStop(0.6, ribbon.color);
        grad.addColorStop(0.85, 'rgba(245, 230, 202, 0.18)');
        grad.addColorStop(1, 'rgba(169, 135, 77, 0.03)');

        ctx.fillStyle = grad;
        ctx.fill();

        // Draw 3D Cross-Mesh Filaments (Architectural Silk Weave Lines)
        ctx.lineWidth = 0.85;
        const meshStep = Math.max(2, Math.floor(stepCount / ribbon.meshDensity));

        for (let i = 0; i < upperPoints.length; i += meshStep) {
          const u = upperPoints[i];
          const l = lowerPoints[i];

          const lineGrad = ctx.createLinearGradient(u.x, u.y, l.x, l.y);
          lineGrad.addColorStop(0, 'rgba(245, 230, 202, 0.6)');
          lineGrad.addColorStop(0.5, 'rgba(196, 164, 106, 0.35)');
          lineGrad.addColorStop(1, 'rgba(169, 135, 77, 0.1)');

          ctx.strokeStyle = lineGrad;
          ctx.beginPath();
          ctx.moveTo(u.x, u.y);
          ctx.lineTo(l.x, l.y);
          ctx.stroke();
        }

        // Draw Sharp Glowing Edge Highlight
        ctx.beginPath();
        ctx.moveTo(upperPoints[0].x, upperPoints[0].y);
        for (let i = 1; i < upperPoints.length; i++) {
          const xc = (upperPoints[i].x + upperPoints[i - 1].x) / 2;
          const yc = (upperPoints[i].y + upperPoints[i - 1].y) / 2;
          ctx.quadraticCurveTo(upperPoints[i - 1].x, upperPoints[i - 1].y, xc, yc);
        }
        ctx.strokeStyle = 'rgba(245, 230, 202, 0.55)';
        ctx.lineWidth = 1.4;
        ctx.shadowColor = 'rgba(196, 164, 106, 0.8)';
        ctx.shadowBlur = 12;
        ctx.stroke();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [intensity]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none w-full h-full ${className}`}
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  );
};
