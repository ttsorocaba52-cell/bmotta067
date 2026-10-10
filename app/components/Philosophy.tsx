import Image from "next/image";

export function Philosophy() {
  return (
    <section className="philosophy">
      <Image
        src="/images/filosofia.webp"
        alt="Audi A5 e Mustang clássico em uma curva ao pôr do sol"
        fill
        sizes="100vw"
        className="philo-bg"
      />
      <div className="philo-shade" />
      <div className="wrap philo-inner">
        <div className="philo-top mono">
          <span>14 / Filosofia das parcerias</span>
          <span>Precisão &amp; Alma</span>
        </div>
        <p className="mono philo-words">Precisão · Alma · História</p>
        <div className="philo-body">
          <h2 className="title-grotesk">
            Mais que
            <br />
            uma publi.
          </h2>
          <div>
            <p>
              Quando uma marca entra naturalmente nos projetos e na rotina da página, ela deixa de
              aparecer apenas em uma publicação e passa a fazer parte da história do conteúdo.
            </p>
            <p className="philo-line display">Do Autobahn à Route 66, o que une é o cuidado.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
