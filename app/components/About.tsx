import Image from "next/image";
import { Section } from "./Section";
import { aboutPillars } from "../data";

export function About() {
  return (
    <Section id="sobre" theme="paper" label="02 / Sobre" tag="Precisão & Alma" mono>
      <div className="about">
        <div>
          <h2 className="title-grotesk">
            Mais que conteúdo,
            <br />
            eu vivo os projetos.
          </h2>
          <div className="prose">
            <p>
              Sempre gostei muito de carros, e a página acabou surgindo naturalmente a partir disso —
              mostrando os carros, projetos, modificações, experiências e tudo que eu realmente vivo no
              dia a dia.
            </p>
            <p>
              Não é um conteúdo que eu criei só pensando em produzir vídeo. São coisas que eu já faria e
              viveria mesmo sem as redes.
            </p>
            <p className="prose-strong">
              E hoje quero cada vez mais transformar isso em conteúdo que aproxime também a comunidade: a
              série de andar nos carros dos seguidores, bastidores, viagens, preparação dos carros e
              experiências no geral.
            </p>
          </div>
          <ol className="pillars">
            {aboutPillars.map((p) => (
              <li key={p.n}>
                <span className="mono red">{p.n}</span>
                <strong>{p.title}</strong>
              </li>
            ))}
          </ol>
        </div>
        <div className="about-photos">
          <figure className="about-photo">
            <Image
              src="/images/sobre-bruno.webp"
              alt="Bruno Motta ao lado de um Audi A5 com a orla ao fundo"
              width={940}
              height={1306}
              sizes="(max-width: 900px) 100vw, 40vw"
            />
            <figcaption className="mono">Fig. 01 — Bruno Motta</figcaption>
          </figure>
          <figure className="about-photo-2">
            <Image
              src="/images/sobre-garagem.webp"
              alt="Porsche 911 branco e Lamborghini cinza lado a lado em uma garagem"
              width={900}
              height={1200}
              sizes="(max-width: 900px) 55vw, 24vw"
            />
            <figcaption className="mono">Fig. 02</figcaption>
          </figure>
        </div>
      </div>
    </Section>
  );
}
