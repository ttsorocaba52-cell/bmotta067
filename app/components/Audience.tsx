import { Num } from "./Num";
import { Section } from "./Section";
import { PrintStrip } from "./PrintStrip";
import { audienceKpis, formatBars, ageBars, last30, insightPrints } from "../data";

export function Audience() {
  return (
    <>
      <Section
        id="audiencia"
        theme="paper"
        label="04 / Audiência"
        tag="Instagram · últimos 90 dias · 5 jul – 2 out 2026"
        mono
      >
        <h2 className="title-grotesk">Ficha da audiência.</h2>
        <ul className="kpis">
          {audienceKpis.map((k) => (
            <li key={k.n}>
              <span className="mono muted">
                {k.n} {k.label}
              </span>
              <strong className="kpi-value">
                <Num value={k.value} />
              </strong>
              <span className="mono red">{k.note}</span>
            </li>
          ))}
        </ul>

        <div className="panels">
          <div className="panel">
            <h3>
              Visualizações por formato <span className="mono muted">90 dias</span>
            </h3>
            {formatBars.map((b) => (
              <div className="bar-row" key={b.label} tabIndex={0} data-tip={b.tip}>
                <strong>{b.label}</strong>
                <div className="bar">
                  <i className={`bar--${b.tone}`} style={{ width: `${b.pct}%` }} />
                </div>
                <span className="mono">
                  <Num value={b.value} />
                </span>
              </div>
            ))}
          </div>
          <div className="panel">
            <h3>
              Faixa etária <span className="mono muted">YouTube</span>
            </h3>
            {ageBars.map((b) => (
              <div className="bar-row" key={b.label} tabIndex={0} data-tip={b.tip}>
                <span className="mono">{b.label}</span>
                <div className="bar">
                  <i className="bar--red" style={{ width: `${b.pct}%` }} />
                </div>
                <span className="mono">
                  <Num value={b.value} />
                </span>
              </div>
            ))}
            <p className="mono muted small">66% entre 18 e 44 anos</p>
          </div>
          <div className="panel">
            <h3>
              Últimos 30 dias <span className="mono muted">IG</span>
            </h3>
            <ul className="mini-list">
              {last30.map((r) => (
                <li key={r.label}>
                  <span>{r.label}</span>
                  <strong>
                    <Num value={r.value} />
                  </strong>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section theme="cream" label="04 — Prova social" tag="Prints originais">
        <div className="split-head">
          <h2 className="display title-display">Direto dos insights.</h2>
          <p className="lede">
            Números reais, sem arredondar a história: a página nos últimos 30 dias e os dois primeiros
            episódios da série no Instagram e no TikTok.
          </p>
        </div>
        <PrintStrip prints={insightPrints} />
      </Section>
    </>
  );
}
