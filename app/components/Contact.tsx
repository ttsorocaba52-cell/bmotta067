import Image from "next/image";
import { contact } from "../data";

export function Contact() {
  return (
    <section id="contato" className="contact">
      <div className="contact-text">
        <div className="sec-head sec-head--mono">
          <span>12 / Contato</span>
        </div>
        <h2 className="title-grotesk">
          Vamos construir
          <br />
          algo grande
          <br />
          <span className="display navy">juntos?</span>
        </h2>
        <dl className="contact-list">
          <div>
            <dt className="mono">Instagram</dt>
            <dd>
              <a href={contact.instagramUrl} target="_blank" rel="noreferrer">
                {contact.instagram}
              </a>
            </dd>
          </div>
          <div>
            <dt className="mono">E-mail</dt>
            <dd>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </dd>
          </div>
          <div>
            <dt className="mono">WhatsApp</dt>
            <dd>
              <a href={contact.whatsappUrl} target="_blank" rel="noreferrer">
                {contact.whatsapp}
              </a>
            </dd>
          </div>
        </dl>
        <a className="btn btn--navy" href={contact.whatsappUrl} target="_blank" rel="noreferrer">
          Chamar no WhatsApp
        </a>
        <p className="contact-foot mono">
          <span>Bruno Motta</span>
          <span className="red">Precisão &amp; Alma</span>
        </p>
      </div>
      <figure className="contact-photo">
        <Image
          src="/images/contato.webp"
          alt="Bruno Motta entre o Audi A5 e a Ford F-150 Raptor em frente à garagem"
          fill
          sizes="(max-width: 900px) 100vw, 45vw"
        />
        <figcaption className="mono">Bruno Motta — Precisão &amp; Alma — 2026</figcaption>
      </figure>
    </section>
  );
}
