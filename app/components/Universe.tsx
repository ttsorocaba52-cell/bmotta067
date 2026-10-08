import Image from "next/image";
import { Section } from "./Section";
import { universe } from "../data";

export function Universe() {
  return (
    <Section theme="cream" label="03 — O universo" tag="Alma">
      <div className="universe">
        <div>
          <h2 className="display title-display">
            Se tem motor, já me chama atenção.
          </h2>
          <div className="prose">
            <p>
              Meu gosto vai muito além de carro. Eu gosto de motor em geral — praticamente qualquer
              coisa que tenha motor já me chama atenção.
            </p>
            <p>
              Claro que hoje aparecem bastante os alemães e alguns americanos nos meus projetos, mas eu
              não queria limitar minha identidade só a isso, porque curto esse universo como um todo.
            </p>
          </div>
          <p className="display tags">
            {universe.tags.map((t) => (
              <span key={t}>{t}</span>
            ))}
            <span className="red">{universe.highlight}</span>
          </p>
        </div>
        <div className="polaroids">
          {universe.photos.map((p, i) => (
            <figure key={p.src} className="polaroid">
              <div className="polaroid-img">
                <Image
                  src={`/images/${p.src}.webp`}
                  alt={p.label}
                  fill
                  sizes="(max-width: 900px) 50vw, 25vw"
                />
              </div>
              <figcaption className="display">
                <span>{p.label}</span>
                <span className="red">Nº {i + 1}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </Section>
  );
}
