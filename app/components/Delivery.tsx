import { Section } from "./Section";
import { delivery, DELIVERY_NUMBER } from "../data";

export function Delivery() {
  return (
    <Section theme="navy" label={`${DELIVERY_NUMBER} — Entrega`} tag="Onde a parceria aparece">
      <div className="split-head">
        <h2 className="display title-display">
          {delivery.title.map((t) => (
            <span key={t} className="block">
              {t}
            </span>
          ))}
        </h2>
        <p className="lede">{delivery.text}</p>
      </div>
      <ol className="delivery">
        {delivery.channels.map((c, i) => (
          <li key={c.name} style={{ "--i": i } as React.CSSProperties}>
            <span className="mono gold">{c.n}</span>
            <h3 className="display">{c.name}</h3>
            <p className="display delivery-kind gold">{c.kind}</p>
            <p>{c.text}</p>
          </li>
        ))}
      </ol>
      <p className="mono delivery-foot">
        <span>{delivery.footLeft}</span>
        <span className="gold">{delivery.footRight}</span>
      </p>
    </Section>
  );
}
