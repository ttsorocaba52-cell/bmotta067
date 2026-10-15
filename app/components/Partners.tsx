import Image from "next/image";
import { Section } from "./Section";
import { partners } from "../data";

export function Partners() {
  return (
    <Section theme="navy" label="15 — Parceiros" tag="Quem já está na garagem">
      <div className="split-head">
        <h2 className="display title-display title-wide">Marcas que já fazem parte da história.</h2>
        <p className="lede">
          Parcerias de longo prazo, que acompanham os projetos desde o começo — não publis isoladas.
        </p>
      </div>
      <div className="partners">
        {partners.map((p) => (
          <article key={p.name} className="partner">
            <div className="partner-id">
              <Image src={`/images/${p.logo}.webp`} alt={`Logo ${p.name}`} width={104} height={104} />
              <h3 className="display">{p.name}</h3>
            </div>
            <div className="partner-meta display">
              <span className="gold">{p.since}</span>
              <span>{p.scope}</span>
            </div>
            <p>{p.text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
