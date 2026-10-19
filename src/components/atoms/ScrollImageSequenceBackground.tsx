'use client';

import React, { useEffect, useRef, useState } from 'react';

interface ScrollImageSequenceBackgroundProps {
  className?: string;
  totalFrames?: number;
  overlayOpacity?: number; // 0 to 1
}

const TOTAL_FRAMES = 200;

export const ScrollImageSequenceBackground: React.FC<ScrollImageSequenceBackgroundProps> = ({
  className = '',
  totalFrames = TOTAL_FRAMES,
  overlayOpacity = 0.78,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const loadedRef = useRef<boolean[]>([]);
  const currentFrameRef = useRef<number>(0);
  const targetFrameRef = useRef<number>(0);
  const mouseRef = useRef<{ x: number; y: number; targetX: number; targetY: number }>({
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0,
  });
  const [loadProgress, setLoadProgress] = useState<number>(0);
  const [isFirstFrameReady, setIsFirstFrameReady] = useState<boolean>(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let animationFrameId: number;
    let isDestroyed = false;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Initialize frame arrays
    imagesRef.current = new Array(totalFrames).fill(null);
    loadedRef.current = new Array(totalFrames).fill(false);

    // Helpers to build URL for WebP sequence
    const getFrameUrl = (index: number) => {
      const padded = String(index).padStart(5, '0');
      return `/bg/sequence/Comp1_${padded}.webp`;
    };

    // Load single image with caching
    const loadFrame = (index: number): Promise<HTMLImageElement | null> => {
      if (loadedRef.current[index] && imagesRef.current[index]) {
        return Promise.resolve(imagesRef.current[index]);
      }

      return new Promise((resolve) => {
        const img = new Image();
        img.src = getFrameUrl(index);

        img.onload = () => {
          if (isDestroyed) return resolve(null);
          imagesRef.current[index] = img;
          loadedRef.current[index] = true;
          if (index === 0) setIsFirstFrameReady(true);
          resolve(img);
        };

        img.onerror = () => {
          resolve(null);
        };
      });
    };

    // Responsive Canvas Resize
    const resizeCanvas = () => {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
    };

    // Scroll Handler
    const handleScroll = () => {
      if (prefersReducedMotion) return;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      const progress = Math.min(1, Math.max(0, window.scrollY / docHeight));
      targetFrameRef.current = progress * (totalFrames - 1);
    };

    // Mouse Move Handler for subtle 3D parallax
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseRef.current.targetY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener('resize', resizeCanvas, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    resizeCanvas();
    handleScroll();

    // Find nearest loaded frame index
    const getNearestLoadedFrame = (targetIdx: number): HTMLImageElement | null => {
      const clamped = Math.round(Math.min(totalFrames - 1, Math.max(0, targetIdx)));
      if (loadedRef.current[clamped] && imagesRef.current[clamped]) {
        return imagesRef.current[clamped];
      }

      // Search outward
      for (let offset = 1; offset < totalFrames; offset++) {
        const lower = clamped - offset;
        const upper = clamped + offset;
        if (lower >= 0 && loadedRef.current[lower] && imagesRef.current[lower]) {
          return imagesRef.current[lower];
        }
        if (upper < totalFrames && loadedRef.current[upper] && imagesRef.current[upper]) {
          return imagesRef.current[upper];
        }
      }
      return null;
    };

    // Render Loop
    let lastDrawnFrame = -1;
    const render = () => {
      if (isDestroyed) return;

      // Mouse easing
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      // Smooth frame interpolation (Lerp)
      if (prefersReducedMotion) {
        currentFrameRef.current = totalFrames - 1; // Completed architectural state
      } else {
        const diff = targetFrameRef.current - currentFrameRef.current;
        // Faster tracking when delta is large, silky settle when close
        const lerpFactor = Math.abs(diff) > 10 ? 0.28 : 0.16;
        currentFrameRef.current += diff * lerpFactor;
      }

      const frameToDraw = Math.round(currentFrameRef.current);
      const img = getNearestLoadedFrame(frameToDraw);

      if (img && (frameToDraw !== lastDrawnFrame || Math.abs(mouseRef.current.targetX - mouseRef.current.x) > 0.001)) {
        lastDrawnFrame = frameToDraw;

        const cw = canvas.width;
        const ch = canvas.height;
        const nw = img.naturalWidth || 1920;
        const nh = img.naturalHeight || 1080;

        // Object-fit: cover with subtle mouse parallax shift
        const scale = Math.max(cw / nw, ch / nh) * 1.03; // slight overscan for parallax padding
        const w = nw * scale;
        const h = nh * scale;

        const parallaxX = mouseRef.current.x * 14;
        const parallaxY = mouseRef.current.y * 10;
        const x = (cw - w) / 2 + parallaxX;
        const y = (ch - h) / 2 + parallaxY;

        ctx.drawImage(img, x, y, w, h);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // 3-Stage Progressive Preloader
    const preloadAll = async () => {
      // Stage 1: Load Frame 0 immediately for instant paint
      await loadFrame(0);
      let count = 1;
      setLoadProgress(Math.round((count / totalFrames) * 100));

      // Stage 2: Load keyframes spaced every 4 frames (e.g. 0, 4, 8, 12 ... 196, 199)
      const keyframes: number[] = [];
      for (let i = 4; i < totalFrames; i += 4) {
        keyframes.push(i);
      }
      if (!keyframes.includes(totalFrames - 1)) keyframes.push(totalFrames - 1);

      // Load keyframes in batches of 6
      for (let i = 0; i < keyframes.length; i += 6) {
        if (isDestroyed) return;
        const batch = keyframes.slice(i, i + 6);
        await Promise.all(batch.map((f) => loadFrame(f)));
        count += batch.length;
        setLoadProgress(Math.round((count / totalFrames) * 100));
      }

      // Stage 3: Load remaining frames in batches of 6
      const remaining: number[] = [];
      for (let i = 1; i < totalFrames; i++) {
        if (!loadedRef.current[i]) remaining.push(i);
      }

      for (let i = 0; i < remaining.length; i += 6) {
        if (isDestroyed) return;
        const batch = remaining.slice(i, i + 6);
        await Promise.all(batch.map((f) => loadFrame(f)));
        count += batch.length;
        setLoadProgress(Math.round((count / totalFrames) * 100));
      }
    };

    preloadAll();

    return () => {
      isDestroyed = true;
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [totalFrames]);

  return (
    <div
      className={`fixed inset-0 pointer-events-none overflow-hidden select-none z-0 ${className}`}
      aria-hidden="true"
    >
      {/* Scroll-Scrubbed Canvas Layer */}
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        style={{
          transform: 'translateZ(0)',
          willChange: 'transform',
        }}
      />

      {/* Bright, Crisp Multi-Layer Overlay — Keeps Image Sequence Fully Visible & Vibrant */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-700"
        style={{
          background: `
            radial-gradient(ellipse 95% 85% at 50% 45%, rgba(10, 16, 29, 0.05) 0%, rgba(10, 16, 29, 0.18) 65%, rgba(10, 16, 29, 0.40) 100%),
            linear-gradient(to bottom, rgba(10, 16, 29, 0.22) 0%, rgba(16, 27, 46, 0.04) 25%, rgba(10, 16, 29, 0.12) 70%, rgba(10, 16, 29, 0.35) 100%)
          `,
        }}
      />

      {/* Subtle Warm Champagne Glow along upper viewport for luxury editorial depth */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[340px] pointer-events-none opacity-15"
        style={{
          background: 'radial-gradient(circle, rgba(217, 184, 120, 0.15) 0%, rgba(10, 16, 29, 0) 70%)',
        }}
      />

      {/* Initial load indicator pip (subtle gold line at bottom while keyframes hydrate) */}
      {loadProgress < 100 && (
        <div
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-[#C4A46A]/40 to-transparent transition-all duration-300 opacity-60"
          style={{ width: `${loadProgress}%` }}
        />
      )}
    </div>
  );
};
