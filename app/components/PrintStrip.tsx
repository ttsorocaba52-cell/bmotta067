import Image from "next/image";

type Print = { src: string; w: number; h: number; title: string; sub: string };

// Faixa horizontal de prints dos painéis; rola de lado no mobile.
export function PrintStrip({ prints, dark }: { prints: Print[]; dark?: boolean }) {
  return (
    <>
    <p className="swipe-hint mono">Deslize para ver mais →</p>
    <ul className={`prints ${dark ? "prints--dark" : ""}`}>
      {prints.map((p) => (
        <li key={p.src}>
          <div className="print-card">
            <Image
              src={`/images/${p.src}.webp`}
              alt={`Print do painel: ${p.title}, ${p.sub}`}
              width={p.w}
              height={p.h}
              sizes="(max-width: 900px) 60vw, 18vw"
            />
          </div>
          <strong className="display">{p.title}</strong>
          <span className="mono">{p.sub}</span>
        </li>
      ))}
    </ul>
    </>
  );
}
