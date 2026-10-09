import Image from "next/image";
import { Section } from "./Section";
import { brandPoints } from "../data";

export function Opportunity() {
  return (
    <Section id="parcerias" theme="paper" label="07 / Oportunidade para marcas" tag="Precisão & Alma" mono>
      <div className="opportunity">
        <figure className="opp-photo">
          <Image
            src="/images/a5-brick.webp"
            alt="Audi A5 Sportback branco estacionado, visto de trás"
            width={1200}
            height={1600}
            sizes="(max-width: 900px) 100vw, 40vw"
          />
        </figure>
        <div>
          <h2 className="title-grotesk">
            Faça parte
            <br />
            do projeto.
          </h2>
          <p className="prose">
            Buscamos marcas que entrem na série e permaneçam nela. A marca aparece onde já faz sentido —
            no carro, na garagem e na rotina — sem interromper a história.
          </p>
          <ol className="numbered opp-list">
            {brandPoints.map((t, i) => (
              <li key={t} style={{ "--i": i } as React.CSSProperties}>
                <span className="mono opp-n">{String(i + 1).padStart(2, "0")}</span>
                <strong>{t}</strong>
                <span className="opp-arrow" aria-hidden>
                  →
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}
