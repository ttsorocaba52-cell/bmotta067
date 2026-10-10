"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Slide = { src: string; alt: string; position: string; w: number; h: number };

// Uma foto por vez, com troca automática (pausa ao passar o mouse/focar), setas, indicadores e deslize no toque.
export function Carousel({ slides, interval = 4800 }: { slides: Slide[]; interval?: number }) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const [still, setStill] = useState(false); // reduzir movimento: sem troca automática
  const [inView, setInView] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const touchX = useRef<number | null>(null);
  const n = slides.length;

  useEffect(() => {
    setStill(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (paused || still || !inView) return;
    const id = setTimeout(() => setI((v) => (v + 1) % n), interval);
    return () => clearTimeout(id);
  }, [i, paused, still, inView, n, interval]);

  const go = (to: number) => setI((to + n) % n);

  return (
    <div
      ref={root}
      className="carousel"
      role="group"
      aria-roledescription="carrossel"
      aria-label="Fotos dos carros da série"
      style={{ "--dur": `${interval}ms` } as React.CSSProperties}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={(e) => {
        touchX.current = e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        touchX.current = null;
        if (Math.abs(dx) > 40) go(i + (dx < 0 ? 1 : -1));
      }}
    >
      <div className="carousel-stage">
        {slides.map((s, k) => (
          <div key={s.src} className={`slide ${k === i ? "is-active" : ""}`} aria-hidden={k !== i}>
            <Image
              src={`/images/${s.src}.webp`}
              alt={s.alt}
              width={s.w}
              height={s.h}
              sizes="(max-width: 900px) 100vw, 36vw"
              style={{ objectPosition: s.position }}
            />
          </div>
        ))}
      </div>
      <div className="carousel-bar">
        <span className="mono carousel-count" aria-live="polite">
          <b>{String(i + 1).padStart(2, "0")}</b> / {String(n).padStart(2, "0")}
        </span>
        <div className="carousel-ctrl">
          <button type="button" className="car-btn" aria-label="Foto anterior" onClick={() => go(i - 1)}>
            ←
          </button>
          <div className="car-dots">
            {slides.map((s, k) => (
              <button
                key={s.src}
                type="button"
                className={`car-dot ${k === i ? "is-active" : ""} ${paused || still || !inView ? "is-paused" : ""}`}
                aria-label={`Ir para a foto ${k + 1}`}
                aria-current={k === i}
                onClick={() => go(k)}
              >
                <i />
              </button>
            ))}
          </div>
          <button type="button" className="car-btn" aria-label="Próxima foto" onClick={() => go(i + 1)}>
            →
          </button>
        </div>
      </div>
    </div>
  );
}
