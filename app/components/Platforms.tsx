import { Num } from "./Num";
import { Section } from "./Section";
import { PrintStrip } from "./PrintStrip";
import { platforms, platformPrints } from "../data";

export function Platforms() {
  return (
    <>
      <Section theme="cream" label="04 — Multiplataforma" tag="Out 2026">
        <div className="split-head split-head--end">
          <h2 className="display title-display">Uma história, quatro telas.</h2>
          <p className="total">
            <strong className="display">
              <Num value="+51M" />
            </strong>
            <span className="mono">visualizações somadas nas 4 plataformas</span>
          </p>
        </div>
        <div className="platforms">
          {platforms.map((p) => (
            <article key={p.name} className={`platform platform--${p.theme}`}>
              <header>
                <h3 className="display">{p.name}</h3>
                <span className="mono gold-or-red">{p.tag}</span>
              </header>
              <strong className="platform-value">
                <Num value={p.value} />
              </strong>
              <span className="mono platform-unit">{p.unit}</span>
              <ul>
                {p.rows.map(([k, v]) => (
                  <li key={k}>
                    <span>{k}</span>
                    <strong>
                      <Num value={v} />
                    </strong>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section theme="navy" label="04 — Prova social" tag="Prints originais">
        <div className="split-head">
          <h2 className="display title-display">
            Em todas as <span className="gold">telas.</span>
          </h2>
          <p className="lede">
            Os mesmos projetos rendendo no Instagram, no YouTube, no Facebook e no TikTok — direto dos
            painéis de cada plataforma.
          </p>
        </div>
        <PrintStrip prints={platformPrints} dark />
      </Section>
    </>
  );
}
