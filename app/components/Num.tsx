"use client";

import { useEffect, useRef, useState } from "react";

// Pega o primeiro número do texto ("33,2M", "↑ 3 mil%", "2.145/h", "+952") e o anima de 0 até o valor.
// O texto final já vem no HTML; a contagem só roda quando o elemento entra na tela.
const NUMBER = /\d[\d.]*(?:,\d+)?/;

function parse(value: string) {
  const m = value.match(NUMBER);
  if (!m) return null;
  const raw = m[0];
  const hasComma = raw.includes(",");
  const thousands = !hasComma && /^\d{1,3}(\.\d{3})+$/.test(raw);
  const decimals = hasComma ? raw.split(",")[1].length : 0;
  const n = parseFloat(thousands ? raw.replace(/\./g, "") : raw.replace(",", "."));
  return {
    n,
    decimals,
    pre: value.slice(0, m.index),
    post: value.slice((m.index ?? 0) + raw.length),
  };
}

function format(n: number, decimals: number) {
  const [int, dec] = n.toFixed(decimals).split(".");
  const grouped = int.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return dec ? `${grouped},${dec}` : grouped;
}

export function Num({ value, duration = 1400 }: { value: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [shown, setShown] = useState(value);

  useEffect(() => {
    const el = ref.current;
    const p = parse(value);
    if (!el || !p) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 3);
          setShown(t < 1 ? `${p.pre}${format(p.n * eased, p.decimals)}${p.post}` : value);
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, duration]);

  return (
    <span ref={ref} className="num">
      {shown}
    </span>
  );
}
