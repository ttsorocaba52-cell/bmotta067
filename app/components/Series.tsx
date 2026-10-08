import { Num } from "./Num";
import Image from "next/image";
import { Section } from "./Section";
import { episodes, pace } from "../data";

export function Series() {
  return (
    <>
      <Section id="serie" theme="navy" label="06 — Série original" tag="No ar" className="sec--live">
        <div className="series">
          <div>
            <h2 className="display title-display title-xl">
              Andando nos carros dos meus seguidores{" "}
              <span className="gold">até eu sentir medo.</span>
            </h2>
            <p className="lede">
              Bruno entra nos projetos dos próprios seguidores: conhece o carro, conhece o dono e vive a
              experiência real de cada preparação — do alemão ao clássico.
            </p>
          </div>
          <figure className="series-photo">
            <Image
              src="/images/golf.webp"
              alt="Volkswagen Golf GTI branco com o capô aberto"
              width={772}
              height={652}
              sizes="(max-width: 900px) 100vw, 30vw"
            />
          </figure>
        </div>
        <div className="episodes">
          {episodes.map((e) => (
            <article key={e.n} className="episode">
              <div className="ep-num">
                <span className="mono">Ep.</span>
                <strong className="display">{e.n}</strong>
              </div>
              <ul>
                {e.stats.map(([v, l]) => (
                  <li key={l}>
                    <strong>
                      <Num value={v} />
                    </strong>
                    <span className="mono">{l}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
          <article className="episode episode--open">
            <div className="ep-num">
              <span className="mono">Ep.</span>
              <strong className="display gold">03</strong>
            </div>
            <div>
              <h3 className="display">Em produção</h3>
              <p>Espaço aberto para a marca parceira da série.</p>
            </div>
          </article>
        </div>
      </Section>

      <Section theme="cream" label="06B — A série escala" tag="Andando com seguidores">
        <div className="split-head">
          <h2 className="display title-display">Não é hype. É ritmo.</h2>
          <p className="lede">
            Cada episódio chega mais rápido que o anterior, e a página inteira cresce junto. O alcance se
            acumula, não depende de um vídeo isolado.
          </p>
        </div>
        <div className="pace">
          <div>
            <h3 className="pace-title">
              Views por hora, por episódio <span className="mono muted">média desde a postagem</span>
            </h3>
            {pace.perHour.map((g) => (
              <div key={g.platform} className="pace-group">
                <div className="pace-head">
                  <strong className="display">{g.platform}</strong>
                  <span className="gold-text">{g.factor}</span>
                </div>
                {[
                  ["Ep.01", g.ep1, "bar--grey"],
                  ["Ep.02", g.ep2, "bar--navy"],
                ].map(([label, d, tone]) => {
                  const data = d as { v: string; pct: number; tip: string };
                  return (
                    <div className="bar-row bar-row--lg" key={label as string} tabIndex={0} data-tip={data.tip}>
                      <span className="mono">{label as string}</span>
                      <div className="bar bar--plain">
                        <i className={tone as string} style={{ width: `${data.pct}%` }} />
                      </div>
                      <strong>
                        <Num value={data.v} />
                      </strong>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
          <div>
            <h3 className="pace-title">
              Views no Instagram / mês <span className="gold-text">×2,2</span>
            </h3>
            <div className="columns">
              {pace.monthly.map((m) => (
                <div key={m.label} className="column" tabIndex={0} data-tip={m.tip}>
                  <strong>
                    <Num value={m.value} />
                  </strong>
                  <i className={m.current ? "bar--navy" : "bar--grey"} style={{ height: `${m.pct * 1.6}px` }} />
                  <span className="mono">{m.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="mono muted small footnote">{pace.footnote}</p>
      </Section>
    </>
  );
}
