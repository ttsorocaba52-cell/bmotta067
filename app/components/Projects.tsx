import type { CSSProperties } from "react";
import Image from "next/image";
import { Reveal } from "./Reveal";
import { Section } from "./Section";
import { projects } from "../data";

export function Projects() {
  return (
    <Section theme="cream" label="08 / Projetos · Precisão" tag="Projetos · Alma" mono>
      <h2 className="title-mixed">
        <span className="title-grotesk">Projetos que fazem</span>{" "}
        <span className="display">parte da história.</span>
      </h2>
      <div className="projects">
        {projects.map((p, pi) => (
          <Reveal key={p.name} className={`project ${pi % 2 ? "project--r" : ""}`}>
            <div className="slants">
              {p.photos.map((src, i) => (
                <div key={src} className="slant" style={{ "--i": i } as CSSProperties}>
                  <Image src={`/images/${src}.webp`} alt={p.name} fill sizes="(max-width: 900px) 45vw, 22vw" />
                </div>
              ))}
            </div>
            <dl className="spec">
              {p.rows.map(([k, v, tag], i) => (
                <div key={k} style={{ "--i": i } as CSSProperties}>
                  <dt className="mono">{k}</dt>
                  <dd>
                    {v}
                    {tag && <span className="spec-tag">{tag}</span>}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
