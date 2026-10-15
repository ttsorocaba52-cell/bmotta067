import Image from "next/image";
import { Num } from "./Num";
import { Section } from "./Section";
import { partnerResults, RESULTS_START } from "../data";

export function Results() {
  return (
    <>
      {partnerResults.map((r, idx) => (
        <Section key={r.partner} theme="cream" label={`${RESULTS_START + idx} — Resultados`} tag={r.partner}>
          <div className="split-head split-head--end">
            <h2 className="display title-display">{r.title}</h2>
            <div className="res-partner">
              <Image src={`/images/${r.logo}.webp`} alt={`Logo ${r.partner}`} width={72} height={72} />
              <div>
                <h3 className="display">{r.partner}</h3>
                <p className="mono">{r.scope}</p>
              </div>
            </div>
          </div>

          <ul className="res-kpis">
            {r.kpis.map((k) => (
              <li key={k.label} className={k.big ? "is-big" : ""}>
                <strong>
                  <Num value={k.value} />
                </strong>
                <span className="mono">{k.label}</span>
              </li>
            ))}
          </ul>

          {r.posts && (
            <ul className="res-posts">
              {r.posts.map((p, i) => (
                <li key={p.img} className={p.top ? "is-top" : ""} style={{ "--i": i } as React.CSSProperties}>
                  <div className="res-thumb">
                    <Image
                      src={`/images/${p.img}.webp`}
                      alt={p.alt}
                      width={265}
                      height={250}
                      sizes="(max-width: 560px) 45vw, (max-width: 1000px) 30vw, 16vw"
                    />
                  </div>
                  <strong className="res-value">
                    <Num value={p.value} />
                  </strong>
                  <span className="mono res-name">{p.name}</span>
                  <span className="res-metric">{p.metric}</span>
                </li>
              ))}
            </ul>
          )}

          {r.channels && r.video && (
            <div className="chan-wrap">
              <figure className="chan-video">
                <Image src={`/images/${r.video.img}.webp`} alt={r.video.alt} width={208} height={370} sizes="(max-width: 800px) 40vw, 208px" />
              </figure>
              <ul className="chan-list">
                {r.channels.map((c, i) => (
                  <li key={c.name} className={c.top ? "is-top" : ""} style={{ "--i": i } as React.CSSProperties}>
                    <strong className="display chan-name">{c.name}</strong>
                    <div className="chan-track">
                      <div className="bar bar--plain chan-bar">
                        <i className={c.top ? "bar--navy" : "bar--grey"} style={{ width: `${c.pct}%` }} />
                      </div>
                      <strong className="chan-value">
                        <Num value={c.value} />
                      </strong>
                    </div>
                    <p className="chan-detail">{c.detail}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <p className="mono muted small footnote">{r.source}</p>
        </Section>
      ))}
    </>
  );
}
