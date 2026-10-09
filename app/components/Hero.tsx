import { Num } from "./Num";
import Image from "next/image";
import { heroStats } from "../data";

export function Hero() {
  return (
    <section id="topo" className="hero">
      <div className="hero-media">
        <Image
          src="/images/hero-banner.webp"
          alt="Bruno Motta em retrato, com fotos do Mustang clássico, do Audi A5 e da garagem"
          fill
          priority
          sizes="100vw"
          className="hero-bg"
        />
      </div>
      <div className="wrap hero-inner">
        <p className="mono hero-kicker">Por Bruno Motta · Media Kit 2026</p>
        <h1 className="display hero-title">
          Bruno
          <br />
          <span className="gold">Motta</span>
        </h1>
        <p className="hero-quote">
          “Não é conteúdo criado só para virar vídeo. São coisas que eu viveria mesmo sem as redes.”
        </p>
        <ul className="hero-stats">
          {heroStats.map((s) => (
            <li key={s.label}>
              <strong>
                <Num value={s.value} />
              </strong>
              <span className="mono">{s.label}</span>
            </li>
          ))}
        </ul>
        <div className="hero-foot">
          <span>Car Lifestyle &amp; Projetos Automotivos</span>
          <span className="display hero-motor">Tudo que tem motor</span>
        </div>
      </div>
    </section>
  );
}
