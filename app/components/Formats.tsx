import { Section } from "./Section";
import { contact, formats } from "../data";
import { FormatPicker } from "./FormatPicker";

export function Formats() {
  return (
    <Section theme="cream" label="08 — Formatos de parceria" tag="Alma">
      <div className="split-head split-head--end">
        <h2 className="display title-display">Como podemos rodar juntos.</h2>
        <p className="lede">Possibilidades, não pacotes. Cada parceria desenhada junto com a marca.</p>
      </div>
      <FormatPicker formats={formats} whatsappUrl={contact.whatsappUrl} />
    </Section>
  );
}
