import Image from "next/image";
import { Section } from "./Section";
import { projects } from "../data";

export function Projects() {
  return (
    <Section theme="cream" label="05 / Projetos · Precisão" tag="Projetos · Alma" mono>
      <h2 className="title-mixed">
        <span className="title-grotesk">Projetos que fazem</span>{" "}
        <span className="display">parte da história.</span>
      </h2>
      <div className="projects">
        {projects.map((p) => (
          <article key={p.name} className="project">
            <div className="slants">
              {p.photos.map((src) => (
                <div key={src} className="slant">
                  <Image src={`/images/${src}.webp`} alt={p.name} fill sizes="(max-width: 900px) 45vw, 22vw" />
                </div>
              ))}
            </div>
            <dl className="spec">
              {p.rows.map(([k, v]) => (
                <div key={k}>
                  <dt className="mono">{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </article>
        ))}
      </div>
    </Section>
  );
}
