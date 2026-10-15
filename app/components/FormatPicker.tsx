"use client";

import { useState } from "react";

type Format = { title: string; text: string };

// Cards selecionáveis: o visitante marca os formatos de interesse e já abre o WhatsApp com a mensagem pronta.
export function FormatPicker({ formats, whatsappUrl }: { formats: Format[]; whatsappUrl: string }) {
  const [picked, setPicked] = useState<string[]>([]);

  const toggle = (title: string) =>
    setPicked((cur) => (cur.includes(title) ? cur.filter((t) => t !== title) : [...cur, title]));

  const message = picked.length
    ? `Olá Bruno! Vi o seu media kit e tenho interesse em: ${picked.join(", ")}.`
    : "Olá Bruno! Vi o seu media kit e gostaria de conversar sobre uma parceria.";
  const href = `${whatsappUrl}?text=${encodeURIComponent(message)}`;

  return (
    <>
      <ul className="formats">
        {formats.map((f, i) => {
          const on = picked.includes(f.title);
          return (
            <li key={f.title} style={{ "--i": i } as React.CSSProperties}>
              <button
                type="button"
                className={`format ${on ? "is-on" : ""}`}
                aria-pressed={on}
                onClick={() => toggle(f.title)}
              >
                <span className="format-top">
                  <span className="mono format-n">{String(i + 1).padStart(2, "0")}</span>
                  <span className="format-check" aria-hidden>
                    {on ? "✓" : "+"}
                  </span>
                </span>
                <h3 className="display">{f.title}</h3>
                <p>{f.text}</p>
              </button>
            </li>
          );
        })}
      </ul>
      <div className="pick-bar" aria-live="polite">
        <p>
          {picked.length === 0 ? (
            <>Toque nos formatos que fazem sentido para a sua marca.</>
          ) : (
            <>
              <strong>{picked.length}</strong> {picked.length === 1 ? "formato escolhido" : "formatos escolhidos"}
            </>
          )}
        </p>
        <div className="pick-actions">
          {picked.length > 0 && (
            <button type="button" className="pick-clear mono" onClick={() => setPicked([])}>
              Limpar
            </button>
          )}
          <a className="btn btn--navy" href={href} target="_blank" rel="noopener noreferrer">
            {picked.length ? "Enviar no WhatsApp" : "Falar no WhatsApp"}
          </a>
        </div>
      </div>
    </>
  );
}
