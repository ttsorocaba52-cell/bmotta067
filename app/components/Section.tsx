import { Reveal } from "./Reveal";

type Props = {
  id?: string;
  theme: "paper" | "cream" | "navy";
  label: string;
  tag?: string;
  mono?: boolean;
  children: React.ReactNode;
  className?: string;
};

// Casca comum: barra superior ("02 / Sobre" ... "Precisão & Alma") + conteúdo.
export function Section({ id, theme, label, tag, mono, children, className = "" }: Props) {
  return (
    <section id={id} className={`sec sec--${theme} ${className}`}>
      <div className="wrap">
        <div className={`sec-head ${mono ? "sec-head--mono" : ""}`}>
          <span>{label}</span>
          {tag && (
            <span className="sec-tag">
              <i aria-hidden /> {tag}
            </span>
          )}
        </div>
        <Reveal>{children}</Reveal>
      </div>
    </section>
  );
}
