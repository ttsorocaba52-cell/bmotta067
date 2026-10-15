import Image from "next/image";
import { Section } from "./Section";
import { testimonials, TESTIMONIALS_NUMBER } from "../data";

export function Testimonials() {
  return (
    <Section theme="cream" label={`${TESTIMONIALS_NUMBER} — Depoimentos`} tag={testimonials.tag}>
      <h2 className="display title-display">
        {testimonials.title.map((t) => (
          <span key={t} className="block">
            {t}
          </span>
        ))}
      </h2>
      <div className="quotes">
        {testimonials.items.map((q, i) => (
          <figure key={q.name} className="quote" style={{ "--i": i } as React.CSSProperties}>
            <span className="quote-mark display" aria-hidden>
              “
            </span>
            <blockquote>
              <p>{q.quote}</p>
            </blockquote>
            <figcaption>
              <Image src={`/images/${q.logo}.webp`} alt={`Logo ${q.role.split("· ")[1]}`} width={60} height={60} />
              <div>
                <strong className="display">— {q.name}</strong>
                <span className="mono">{q.role}</span>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
      <p className="mono muted small footnote">{testimonials.note}</p>
    </Section>
  );
}
