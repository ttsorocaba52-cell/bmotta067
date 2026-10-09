import { Section } from "./Section";
import { segments } from "../data";

export function Segments() {
  const offset = segments.precisao.length;
  return (
    <Section theme="cream" label="09 / Segmentos de interesse" mono className="sec--segments">
      <h2 className="title-grotesk">Marcas que fazem sentido para essa história.</h2>
      <div className="segments">
        <div>
          <h3 className="seg-title">
            Precisão <span className="mono muted">Técnica</span>
          </h3>
          <ol className="numbered numbered--tight seg-list">
            {segments.precisao.map((t, i) => (
              <li key={t} style={{ "--i": i } as React.CSSProperties}>
                <span className="mono seg-n">{String(i + 1).padStart(2, "0")}</span>
                <strong>{t}</strong>
              </li>
            ))}
          </ol>
        </div>
        <div className="seg--navy">
          <h3 className="seg-title">
            Alma <span className="mono muted">Paixão</span>
          </h3>
          <ol className="numbered numbered--tight seg-list">
            {segments.alma.map((t, i) => (
              <li key={t} style={{ "--i": i } as React.CSSProperties}>
                <span className="mono seg-n">{String(offset + i + 1).padStart(2, "0")}</span>
                <strong>{t}</strong>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}
