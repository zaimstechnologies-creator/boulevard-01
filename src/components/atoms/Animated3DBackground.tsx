'use client';

import React, { useEffect, useRef } from 'react';

interface Animated3DBackgroundProps {
  className?: string;
  intensity?: number;
  fixed?: boolean;
}

export const Animated3DBackground: React.FC<Animated3DBackgroundProps> = ({
  className = '',
  intensity = 1.0,
  fixed = false,
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
      if (fixed) {
        width = window.innerWidth;
        height = window.innerHeight;
      } else {
        width = canvas.parentElement?.clientWidth || window.innerWidth;
        height = canvas.parentElement?.clientHeight || window.innerHeight;
      }
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (fixed) {
        targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
        targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
      } else {
        const rect = canvas.getBoundingClientRect();
        targetMouseX = ((e.clientX - rect.left) / width - 0.5) * 2;
        targetMouseY = ((e.clientY - rect.top) / height - 0.5) * 2;
      }
    };

    const handleScroll = () => {
      targetScrollY = window.scrollY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleResize();

    // Floating gold ambient particles in 3D volume
    const particleCount = 65;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random(),
      y: Math.random(),
      z: Math.random() * 600 + 50,
      radius: Math.random() * 1.8 + 0.4,
      speedX: (Math.random() - 0.5) * 0.0003,
      speedY: (Math.random() - 0.5) * 0.0003,
      alpha: Math.random() * 0.55 + 0.25,
      pulse: Math.random() * Math.PI * 2,
    }));

    // 3D sweeping luxury sine ribbons (champagne gold silk and warm titanium)
    interface RibbonSpec {
      baseY: number; // 0 to 1
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
        baseY: 0.32,
        amplitude: 65,
        freqX: 0.0014,
        freqY: 0.002,
        speed: 0.007,
        phaseOffset: 0,
        width: 140,
        color: 'rgba(217, 184, 120, 0.38)',
        glowColor: 'rgba(245, 230, 202, 0.22)',
        meshDensity: 26,
        tiltZ: 160,
      },
      {
        baseY: 0.46,
        amplitude: 90,
        freqX: 0.0011,
        freqY: 0.0016,
        speed: 0.005,
        phaseOffset: 2.1,
        width: 180,
        color: 'rgba(196, 164, 106, 0.48)',
        glowColor: 'rgba(224, 207, 168, 0.28)',
        meshDensity: 30,
        tiltZ: 220,
      },
      {
        baseY: 0.62,
        amplitude: 80,
        freqX: 0.0013,
        freqY: 0.0017,
        speed: 0.008,
        phaseOffset: 3.8,
        width: 150,
        color: 'rgba(169, 135, 77, 0.42)',
        glowColor: 'rgba(217, 184, 120, 0.2)',
        meshDensity: 24,
        tiltZ: 140,
      },
      {
        baseY: 0.78,
        amplitude: 60,
        freqX: 0.0016,
        freqY: 0.0022,
        speed: 0.009,
        phaseOffset: 5.2,
        width: 120,
        color: 'rgba(224, 207, 168, 0.32)',
        glowColor: 'rgba(245, 230, 202, 0.16)',
        meshDensity: 20,
        tiltZ: 110,
      },
    ];

    const render = () => {
      time += 0.012 * intensity;

      // Smooth mouse easing with dampening
      mouseX += (targetMouseX - mouseX) * 0.04;
      mouseY += (targetMouseY - mouseY) * 0.04;
      scrollY += (targetScrollY - scrollY) * 0.06;

      ctx.clearRect(0, 0, width, height);

      // Deep Midnight Navy base
      const bgGradient = ctx.createRadialGradient(
        width * 0.5 + mouseX * 80,
        height * 0.4 + mouseY * 60,
        40,
        width * 0.5,
        height * 0.5,
        Math.max(width, height) * 0.9
      );
      bgGradient.addColorStop(0, 'rgba(22, 38, 64, 0.95)');
      bgGradient.addColorStop(0.5, 'rgba(14, 24, 42, 0.98)');
      bgGradient.addColorStop(1, 'rgba(9, 16, 28, 1)');

      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, width, height);

      // 3D Perspective Floor Horizon Grid (Subtle Architectural Geometry)
      ctx.save();
      const horizonY = height * 0.65 + mouseY * 30;
      const fov = 350;
      const gridStep = 45;
      const gridLines = 24;

      ctx.lineWidth = 0.5;
      for (let i = -gridLines / 2; i <= gridLines / 2; i++) {
        const xOffset = i * gridStep + mouseX * 40;
        const startX = width * 0.5 + xOffset * 0.2;
        const endX = width * 0.5 + xOffset * 2.8;

        const gridGrad = ctx.createLinearGradient(startX, horizonY, endX, height);
        gridGrad.addColorStop(0, 'rgba(196, 164, 106, 0.01)');
        gridGrad.addColorStop(0.5, 'rgba(196, 164, 106, 0.08)');
        gridGrad.addColorStop(1, 'rgba(196, 164, 106, 0.02)');

        ctx.strokeStyle = gridGrad;
        ctx.beginPath();
        ctx.moveTo(startX, horizonY);
        ctx.lineTo(endX, height);
        ctx.stroke();
      }

      // Horizontal perspective rungs
      for (let d = 1; d <= 8; d++) {
        const py = horizonY + (height - horizonY) * Math.pow(d / 8, 1.8);
        const rungAlpha = 0.03 + (d / 8) * 0.06;
        ctx.strokeStyle = `rgba(196, 164, 106, ${rungAlpha})`;
        ctx.beginPath();
        ctx.moveTo(0, py);
        ctx.lineTo(width, py);
        ctx.stroke();
      }
      ctx.restore();

      // Dynamic Interactive Mouse Aura Spotlight
      const mousePixelX = (mouseX * 0.5 + 0.5) * width;
      const mousePixelY = (mouseY * 0.5 + 0.5) * height;
      const aura = ctx.createRadialGradient(
        mousePixelX,
        mousePixelY,
        10,
        mousePixelX,
        mousePixelY,
        340
      );
      aura.addColorStop(0, 'rgba(196, 164, 106, 0.12)');
      aura.addColorStop(0.4, 'rgba(22, 38, 64, 0.08)');
      aura.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = aura;
      ctx.fillRect(0, 0, width, height);

      // Render Floating 3D Gold Particles with Depth and Scroll Physics
      particles.forEach((p) => {
        p.pulse += 0.02;
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x < 0) p.x = 1;
        if (p.x > 1) p.x = 0;
        if (p.y < 0) p.y = 1;
        if (p.y > 1) p.y = 0;

        const scrollParallax = (scrollY * 0.0003 * p.z) % height;
        const px = p.x * width + mouseX * (p.z * 0.08);
        let py = p.y * height + mouseY * (p.z * 0.06) - scrollParallax;
        if (py < 0) py += height;
        if (py > height) py -= height;

        const scale = fov / (fov + p.z);
        const radius = p.radius * scale;
        const currentAlpha = p.alpha * scale * (0.6 + 0.4 * Math.sin(p.pulse));

        ctx.beginPath();
        ctx.arc(px, py, Math.max(0.4, radius), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(224, 207, 168, ${currentAlpha})`;
        ctx.shadowBlur = 10 * scale;
        ctx.shadowColor = 'rgba(196, 164, 106, 0.8)';
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Render 3D Silk Ribbons & Mesh Filaments
      ribbons.forEach((ribbon, rIdx) => {
        const stepCount = 55;
        const stepWidth = (width + 400) / stepCount;
        const startX = -200;

        const upperPoints: { x: number; y: number; z: number }[] = [];
        const lowerPoints: { x: number; y: number; z: number }[] = [];

        // Dynamic scroll rotation & phase drift
        const scrollOffset = scrollY * 0.0006 * (rIdx + 1);
        const currentPhase = time * ribbon.speed + ribbon.phaseOffset + scrollOffset;

        for (let i = 0; i <= stepCount; i++) {
          const x = startX + i * stepWidth;
          const wave1 = Math.sin(x * ribbon.freqX + currentPhase) * ribbon.amplitude;
          const wave2 = Math.cos(x * ribbon.freqY - currentPhase * 0.7 + mouseX * 0.6) * (ribbon.amplitude * 0.55);
          const yCenter = height * ribbon.baseY + wave1 + wave2 + mouseY * 40 - (scrollY * 0.04 * (rIdx * 0.2 + 0.5)) % height;

          const z = Math.sin(x * 0.0012 + currentPhase) * ribbon.tiltZ;
          const perspective = 600 / (600 + z);

          const dynamicWidth = ribbon.width * (0.75 + 0.25 * Math.sin(x * 0.002 + currentPhase));
          const halfW = (dynamicWidth * perspective) / 2;

          upperPoints.push({
            x: x + mouseX * (z * 0.09),
            y: yCenter - halfW,
            z,
          });
          lowerPoints.push({
            x: x + mouseX * (z * 0.09),
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

        const grad = ctx.createLinearGradient(0, height * 0.1, width, height * 0.9);
        grad.addColorStop(0, 'rgba(196, 164, 106, 0.03)');
        grad.addColorStop(0.3, ribbon.glowColor);
        grad.addColorStop(0.65, ribbon.color);
        grad.addColorStop(0.85, 'rgba(245, 230, 202, 0.16)');
        grad.addColorStop(1, 'rgba(169, 135, 77, 0.02)');

        ctx.fillStyle = grad;
        ctx.fill();

        // Draw 3D Cross-Mesh Filaments (Architectural Silk Weave Lines)
        ctx.lineWidth = 0.8;
        const meshStep = Math.max(2, Math.floor(stepCount / ribbon.meshDensity));

        for (let i = 0; i < upperPoints.length; i += meshStep) {
          const u = upperPoints[i];
          const l = lowerPoints[i];

          const lineGrad = ctx.createLinearGradient(u.x, u.y, l.x, l.y);
          lineGrad.addColorStop(0, 'rgba(245, 230, 202, 0.55)');
          lineGrad.addColorStop(0.5, 'rgba(196, 164, 106, 0.3)');
          lineGrad.addColorStop(1, 'rgba(169, 135, 77, 0.08)');

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
        ctx.lineWidth = 1.3;
        ctx.shadowColor = 'rgba(196, 164, 106, 0.75)';
        ctx.shadowBlur = 10;
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
  }, [intensity, fixed]);

  const positionClass = fixed
    ? 'fixed inset-0 pointer-events-none w-screen h-screen -z-10'
    : 'absolute inset-0 pointer-events-none w-full h-full';

  return (
    <canvas
      ref={canvasRef}
      className={`${positionClass} ${className}`}
      style={{ zIndex: fixed ? -10 : 0 }}
      aria-hidden="true"
    />
  );
};
